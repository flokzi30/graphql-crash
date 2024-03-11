const mongoose = require('mongoose');

const UserContacts = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
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

const Contacts = mongoose.model('UserContacts', UserContacts);

module.exports = Contacts;
