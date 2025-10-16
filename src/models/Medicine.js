const mongoose = require('mongoose');
const { storageConditionsSchema } = require('./subSchemas');
const { MEDICINE_CATEGORY, MEDICINE_STATUSES } = require('../utils/constants');

const medicineSchema = new mongoose.Schema({
  medicine_name: {
    type: String,
    required: [true, 'Medicine name is required'],
    trim: true,
  },
  license_code: {
    type: String,
    required: [true, 'Medicine code is required'],
    trim: true,
  },

  category: {
    type: String,
    enum: {
      values: Object.values(MEDICINE_CATEGORY),
      message: `Category must be one of: ${Object.values(MEDICINE_CATEGORY).join(', ')}`,
    },
  },
  min_stock_threshold: {
    type: Number,
    min: [0, 'Minimum stock threshold cannot be negative'],
  },

  max_stock_threshold: {
    type: Number,
    min: [0, 'Maximum stock threshold cannot be negative'],
  },

  unit_of_measure: {
    type: String,
    required: [true, 'Unit of measure is required'],
  },
  status: {
    type: String,
    enum: {
      values: Object.values(MEDICINE_STATUSES),
      message: `Status must be one of: ${Object.values(MEDICINE_STATUSES).join(', ')}`,
    },
    default: MEDICINE_STATUSES.ACTIVE,
  },
});

// Thêm index cho các field thường được query
medicineSchema.index({ medicine_name: 1 });

module.exports = mongoose.model('Medicine', medicineSchema);
