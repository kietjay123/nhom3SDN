const mongoose = require('mongoose');
const constants = require('../utils/constants'); // Import các hằng số nếu cần thiết

// Schema chính cho User
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: {
      values: Object.values(constants.USER_ROLES),
      message: `Role must be one of: ${Object.values(constants.USER_ROLES).join(', ')}`,
    },
  },
  status: {
    type: String,
    enum: {
      values: Object.values(constants.USER_STATUSES),
      message: `Status must be one of: ${Object.values(constants.USER_STATUSES).join(', ')}`,
    },
    default: constants.USER_STATUSES.ACTIVE,
  }
});

module.exports = mongoose.model('User', userSchema);
