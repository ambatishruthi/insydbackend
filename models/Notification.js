const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['like', 'comment', 'follow'], // allowed types
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['unread', 'read'],
    default: 'unread',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create model
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
