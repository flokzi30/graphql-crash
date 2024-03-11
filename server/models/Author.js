const mongoose = require('mongoose');

const socialLinkSchema = new mongoose.Schema({
  platform: String,
  link: String,
}, { _id: false });

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  avatarUrl: { type: String, required: true },
  socialLinks: [socialLinkSchema],
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;
