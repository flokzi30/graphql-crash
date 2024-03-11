const mongoose = require('mongoose');

const UrunKategoriSchema = new mongoose.Schema({
    UrunKategoriAd: {
        type: String,
    },
    UrunSayi: {
        type: Number,
        default: 0
    },
    UrunKategoriStatu: {
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

module.exports = mongoose.model('UrunKategori', UrunKategoriSchema);
