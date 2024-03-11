const mongoose = require('mongoose');

const HizmetKategoriSchema = new mongoose.Schema({
    HizmetKategoriAd: {
        type: String,
        required: true
    },
    HizmetKategoriAciklama: {
        type: String
    },
    HizmetKategoriStatu: {
        type: String,
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

module.exports = mongoose.model('HizmetKategori', HizmetKategoriSchema);
