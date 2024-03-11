const mongoose = require('mongoose');

const UserVerificationSchema = new mongoose.Schema({
    firmaId: {
        type: String,
        required: true
    },
    verificationCode: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expiresAt: {
        type: Date,
        default: Date.now,
    },
    
});
module.exports = mongoose.model('UserVerification', UserVerificationSchema);