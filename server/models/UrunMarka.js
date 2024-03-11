const mongoose = require('mongoose');

const UrunMarkaSchema = new mongoose.Schema({
    UrunMarkaAd: {
        type: String,
    },
    UrunSayi: {
        type: Number,
        default: 0
    },
    UrunMarkaStatu: {
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

module.exports = mongoose.model('UrunMarka', UrunMarkaSchema);
