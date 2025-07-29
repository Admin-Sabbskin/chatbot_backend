# Shopify Chatbot - Render Deployment Guide

## Step 1: Deploy Backend to Render (FREE)

### 1.1 Prepare Your GitHub Repository
Your code is already ready for Render deployment.

### 1.2 Deploy on Render
1. Go to [Render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub account and select your repository: `Admin-Sabbskin/chatbot_backend`
4. Configure the deployment:
   - **Name**: `shopify-chatbot-backend` (or any name you prefer)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

### 1.3 Set Environment Variables
In the Render dashboard:
1. Go to your service → "Environment"
2. Add environment variable:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: `your_openai_api_key_here`
3. Click "Save Changes"

### 1.4 Deploy
Click "Deploy" - Render will build and deploy your app. You'll get a URL like:
`https://your-app-name.onrender.com`

## Step 2: Add Chatbot to Your Shopify Store

### 2.1 Update the Theme Code
1. Copy the content from `shopify-theme-code.html`
2. Replace `YOUR_RENDER_URL_HERE` with your actual Render URL

### 2.2 Add to Shopify Theme
1. Go to Shopify Admin → Online Store → Themes
2. Click "Actions" → "Edit code"
3. Open `theme.liquid` file
4. Scroll to the bottom and find the closing `</body>` tag
5. Paste the updated code just BEFORE the `</body>` tag
6. Click "Save"

## Step 3: Test Your Chatbot

1. Visit your Shopify store
2. You should see a blue chat icon in the bottom-right corner
3. Click it to open the chatbot
4. Test with store-related questions

## Important Features

### ✅ What the chatbot WILL help with:
- Product information and details
- Shipping policies and timeframes
- Return and refund policies
- Store policies and procedures
- General customer service questions

### ❌ What the chatbot WON'T do:
- Answer questions unrelated to your store
- Provide personal advice
- Give information not related to your business

## Customization Options

You can customize the chatbot by editing the theme code:

### Change Colors
```css
background: #667eea; /* Change to your brand color */
```

### Change Position
```css
bottom: 20px; /* Distance from bottom */
right: 20px;  /* Distance from right */
```

### Change Size
```css
width: 60px;  /* Button size */
height: 60px;
```

## Troubleshooting

### Chatbot doesn't appear
- Check if the code was added correctly to theme.liquid
- Ensure the Render URL is correct and the service is running
- Check browser console for errors

### Chatbot shows connection error
- Verify your Render service is running
- Check if the OPENAI_API_KEY environment variable is set
- Ensure your OpenAI API key is valid and has credits

### Slow responses
- Free Render services may have slower response times
- Consider upgrading to a paid Render plan for better performance

## Cost Breakdown

- **Render hosting**: FREE (with limitations: spins down after 15 min of inactivity)
- **OpenAI API**: Pay per use (very affordable for small stores)
- **Shopify integration**: FREE (just adding code to theme)

## Production Tips

1. **Monitor usage**: Keep track of your OpenAI API usage
2. **Test thoroughly**: Test the chatbot with various customer questions
3. **Update responses**: You can modify the system prompt in server.js to improve responses
4. **Backup theme**: Always backup your theme before making changes
