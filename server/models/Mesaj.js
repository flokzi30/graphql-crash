const mongoose = require('mongoose');

const MesajSchema = new mongoose.Schema({

    MesajBaslik: {
        type: String,
        required: true
    },
    MesajIcerik: {
        type: String,
        required: true
    },
    MesajTarih: {
        type: Date,
        default: Date.now
    },
    MesajTur: {
        type: String,
        required: true
    },
    RandevuNot: {
        type: String
    },
    MesajStatu: {
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
    RandevuId: {
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

module.exports = mongoose.model('Mesaj', MesajSchema);