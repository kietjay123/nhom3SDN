const mongoose = require('mongoose');
const { ANNEX_ACTIONS, ANNEX_STATUSES, CONTRACT_TYPES } = require('../utils/constants');


// Sub-schema cho import order details
const importOrderDetailsSchema = new mongoose.Schema({
  medicine_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medicine',
    required: [true, 'Medicine ID is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity cannot be negative'],
  },
  unit_price: {
    type: Number,
    min: [0, 'Unit price cannot be negative'],
  },
});






// Sub-schema cho export inspection
const exportInspectionSchema = new mongoose.Schema(
  {
    package_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Package',
      required: [true, 'Package ID is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be a positive integer'],
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Created by is required'],
    },
  },
  { _id: false },
);

// Sub-schema cho export order details
const exportOrderDetailsSchema = new mongoose.Schema({
  medicine_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medicine',
    required: [true, 'Medicine ID is required'],
  },
  expected_quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity cannot be negative'],
  },
  actual_item: [exportInspectionSchema],
  unit_price: {
    type: Number,
    min: [0, 'Unit price cannot be negative'],
  },
});

const checkItemSchema = new mongoose.Schema(
  {
    package_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Package',
      required: [true, 'Package ID is required'],
    },
    expected_quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity cannot be negative'],
    },
    actual_quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity cannot be negative'],
    },
    type: {
      type: String,
      enum: ['under_expected', 'over_expected', 'valid'],
      default: 'valid',
    },
  },
  { _id: false },
);

// Xuất sub-schema để sử dụng ở các file khác
module.exports = {
  importOrderDetailsSchema,
  exportOrderDetailsSchema,
  exportInspectionSchema,
  checkItemSchema,
};
