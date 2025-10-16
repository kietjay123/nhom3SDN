const mongoose = require('mongoose');
const http = require('http');
const app = require('./app');
require('dotenv').config();

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI,)
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
