const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const models = require('./models');
const app = express();

const areaRoutes = require('./router/area.route');
const batchRoutes = require('./router/batch.route');
const corsOptions = {

  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    const allowedOrigins = [
      'http://localhost:3000',
    ];

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routers
app.use('/api/areas', areaRoutes);
app.use('/api/batches', batchRoutes);

app.use(cors(corsOptions));

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'OK ✅ Server running' });
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});


module.exports = app;
