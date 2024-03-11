const mongoose = require('mongoose');

const KategoriSchema = new mongoose.Schema({
    KategoriAd: {
        type: String,
        required: true
    },
    KategoriGorsel: {
        type: String,
        required: true
    },
    KategoriTur: {
        type: String,
        required: true
    },
    KategoriUst: {
        type: Boolean
    },
    KategoriAlt: {
        type: Boolean
    },
    KategoriStatu: {
        type: Number,
        default: 1
    },
    FirmaId: {
        type: String
    },
},
    {
        timestamps: {
            currentTime: () => {
                return new Date();
            },
        },
    }
);

module.exports = mongoose.model('Kategori', KategoriSchema);