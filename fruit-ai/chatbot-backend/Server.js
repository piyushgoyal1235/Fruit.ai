const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;
  
  // Simple mock response logic
  const botReply = `You said: ${userMessage}`;

  res.json({ reply: botReply });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
