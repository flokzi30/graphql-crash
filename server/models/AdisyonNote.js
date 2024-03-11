// PersonelNote.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdisyonNote = new Schema({
    adisyonId: {
        type: Schema.Types.ObjectId,
        ref: 'Adisyon',
        required: true
    },
    personelId: {
        type: Schema.Types.ObjectId,
        ref: 'Personel',
        required: true
    },
    note: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('AdisyonNote', AdisyonNote);
