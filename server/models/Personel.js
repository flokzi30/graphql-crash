const mongoose = require('mongoose');

const PersonelSchema = new mongoose.Schema({
    PersonelAdSoyad: {
        type: String,
        required: true
    },
    PersonelEPosta: {
        type: String,
    },
    PersonelTelNo: {
        type: Number,
        required: true
    },
    PersonelPrim: {
        type: Number
    },
    PersonelBakiye: {
        type: Number
    },
    PersonelYetki: {
        type: String
    },
    PersonelCinsiyet: {
        type: String,
    },
    PersonelDogumTarihi: {
        type: Date,
        default: Date.now,
    },
    PersonelIseGirisTarihi: {
        type: Date,
        default: Date.now
    },
    PersonelMesaiGunleri: {
        type: Array
    },
    PersonelMesaiBaslangic: {
        type: String,
        default: '09:00'
    },
    PersonelMesaiBitis: {
        type: String,
        default: '17.00'
    },
    PersonelTakvimRengi: {
        type: String
    },
    PersonelPrimsizMaas: {
        type: Number
    },
    PersonelFoto: {
        type: String
    },
    PersonelGecmisSiparis:{
        type:Array
    },
    PersonelStatu: {
        type: Number,
        default: 1
    },
    FirmaId: {
        type: String
    },
    PersonelPuan: {
        type: Number
    },
    verified: {
        type: Boolean,
    },
    newEmail: {
        type: String,
        default: '',
    },
    emailVerificationToken: {
        type: String,
        default: '',
    },
    emailTokenExpires: {
        type: Date,
    },
    PersonelSifre: {
        type: String,
    },
    allowColleagues: {
        type: Boolean,
        default: true
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

module.exports = mongoose.model('Personel', PersonelSchema);