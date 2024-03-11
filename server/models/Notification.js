const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Firma' },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
