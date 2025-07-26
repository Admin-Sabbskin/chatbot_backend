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

app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Route to serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant that answers questions about a Shopify store's products based on website data." },
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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
