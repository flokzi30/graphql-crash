const mongoose = require('mongoose');

const UrunSchema = new mongoose.Schema({
    UrunAd: {
        type: String,
        required: true
    },
    UrunKategori: {
        type: Array,
    },
    UrunMarka: {
        type: Array,
    },
    UrunTedarikci: {
        type: Array,
    },
    UrunOlcuBirimi: {
        type: String
    },
    UrunMiktar: {
        type: Number
    },
    UrunAlisFiyat: {
        type: Number,
    },
    UrunSatisFiyat: {
        type: Number,
    },
    UrunKar: {
        type: Number
    },
    UrunStokKod: {
        type: String,
    },
    UrunStokTakibiYap: {
        type: Boolean,
        default: false,
    },
    UrunStokAdeti: {
        type: Number
    },
    UrunDusukStokSeviyesi: {
        type: Number
    },
    UrunStatu: {
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

module.exports = mongoose.model('Urun', UrunSchema);