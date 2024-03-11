const mongoose = require('mongoose');

const waitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  businessType: {
    type: Array,
    required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  referredBy: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
},
  {
    timestamps: {
      currentTime: () => {
        return new Date();
      }
    }
  }
);

const Waitlist = mongoose.model('Waitlist', waitlistSchema);

module.exports = Waitlist;
