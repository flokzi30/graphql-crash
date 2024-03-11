const mongoose = require('mongoose');

const RandevuSchema = new mongoose.Schema({
    RandevuTarih: {
        type: Date,
        default: Date.now,
        required: true
    },
    RandevuSaatBaslangic: {
        type: Number,
        required: true
    },
    RandevuSaatBitis: {
        type: String
    },
    HizmetSec: {
        type: String
    },
    RandevuNot: {
        type: String
    },
    RandevuDurum: {
        type: String
    },
    RandevuStatu: {
        type: Number,
        default: 1
    },
    MusteriId: {
        type: String
    },
    HizmetId: {
        type: String
    },
    PersonelId: {
        type: String
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

module.exports = mongoose.model('Randevu', RandevuSchema);