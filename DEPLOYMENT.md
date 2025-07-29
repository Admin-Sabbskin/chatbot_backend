# Shopify Chatbot - Replit Deployment Instructions

## 1. Deploy to Replit

1. Go to [Replit.com](https://replit.com)
2. Create a new Repl and choose "Import from GitHub"
3. Import your repository: `https://github.com/Admin-Sabbskin/chatbot_backend.git`
4. Or upload all your files manually

## 2. Set Environment Variables

In Replit, go to the "Secrets" tab (lock icon) and add:
- Key: `OPENAI_API_KEY`
- Value: `your_openai_api_key_here`

## 3. Run Your Application

Click the "Run" button in Replit. Your app will be available at:
`https://YOUR_REPL_NAME.YOUR_USERNAME.replit.dev`

## 4. Update Widget Configuration

After deployment, update the `shopify-widget.html` file:
- Replace `YOUR_REPLIT_URL_HERE` with your actual Replit URL

## 5. Integrate with Shopify

### Option A: Add to Theme (Recommended)
1. Go to Shopify Admin → Online Store → Themes
2. Click "Actions" → "Edit code"
3. Open `theme.liquid` file
4. Before the closing `</body>` tag, add:

```html
<script src="https://YOUR_REPL_NAME.YOUR_USERNAME.replit.dev/widget"></script>
```

### Option B: Add via App (Advanced)
Create a Shopify app that injects the widget script

## 6. Test Your Chatbot

1. Visit your Shopify store
2. Look for the chat icon in the bottom-right corner
3. Click to open the chatbot
4. Test with questions about your store

## Important Notes

- Make sure your Replit is always running (consider upgrading to a paid plan)
- The chatbot will work on all pages of your Shopify store
- CORS is configured to allow Shopify domains
- The widget is responsive and works on mobile devices

## Troubleshooting

- If the widget doesn't appear, check the browser console for errors
- Make sure the Replit URL is correct in the widget file
- Verify that CORS settings allow your Shopify domain
