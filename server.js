const express = require('express');
const cors = require('cors');
const path = require('path');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors({
  origin: ['https://shopify.com', 'https://*.myshopify.com', 'https://admin.shopify.com', /\.myshopify\.com$/],
  credentials: true
}));
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Route to serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to serve the Shopify widget
app.get('/widget', (req, res) => {
  res.sendFile(path.join(__dirname, 'shopify-widget.html'));
});

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful customer service assistant for a Shopify store. You can only answer questions about products, services, shipping, returns, and store policies based on the information available on the website. If you don't have specific information about a product or policy, politely ask the customer to check the website or contact customer service directly. Do not provide information about topics unrelated to the store." },
        { role: "user", content: userMessage }
      ],
    });

    const reply = chatResponse.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({ error: "Failed to get response from OpenAI" });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
