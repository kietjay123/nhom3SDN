const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware (optional)
app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});