const mongoose = require('mongoose');

const HizmetSchema = new mongoose.Schema({
    HizmetAd: {
        type: String,
        required: true
    },
    // HizmetAciklama: {
    //     type: String,
    //     required: true
    // },
    HizmetKategori: {
        type: Array,
        // required: true
    },
    HizmetOnlineRandevu: {
        type: Boolean,
    },
    HizmetFiyatTipi: {
        type: String
    },
    HizmetMinFiyat: {
        type: String
    },
    HizmetMaxFiyat: {
        type: String
    },
    HizmetSure: {
        type: String
    },
    HizmetMola: {
        type: Boolean,
        default: false
    },
    HizmetIslemOncesiHazirlik: {
        type: String
    },
    HizmetIslemSonrasiMola: {
        type: String
    },

    HizmetPrim: {
        type: Boolean,
        default: false
    },
    HizmetPrimMiktarı: {
        type: String
    },
    HizmetStatu: {
        type: Number,
        default: 1
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

module.exports = mongoose.model('Hizmet', HizmetSchema);
