const mongoose = require('mongoose');

const UrunTedarikciSchema = new mongoose.Schema({
    UrunTedarikciAd: {
        type: String,
    },
    UrunTedarikciStatu: {
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

module.exports = mongoose.model('UrunTedarikci', UrunTedarikciSchema);
