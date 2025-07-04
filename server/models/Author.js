const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bio: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Author', AuthorSchema);
