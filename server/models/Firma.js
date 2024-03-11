const mongoose = require('mongoose');

const socialLinkSchema = new mongoose.Schema({
    facebook: String,
    twitter: String,
    instagram: String,
    tiktok: String,
}, { _id: false });

const FirmaSchema = new mongoose.Schema({
    FirmaAd: {
        type: String,
        required: true
    },
    FirmaYetkili: {
        type: String,
        required: true
    },
    FirmaTelNo: {
        type: String,
        required: true
    },
    FirmaEPosta: {
        type: String,
        required: true
    },
    FirmaSifre: {
        type: String,
        required: true
    },
    FirmaIl: {
        type: String,
        required: true
    },
    FirmaIlce: {
        type: String,
        required: true
    },
    FirmaSocialLinks: [socialLinkSchema],
    FirmaSemt: {
        type: String,
        required: true
    },
    FirmaAdres: {
        type: String,
        required: true
    },
    FirmaAcilis: {
        type: String,
        default: "9:00"
    },
    FirmaKapanis: {
        type: String,
        default: "18:00"
    },
    FirmaCalismaGunler: {
        type: Array
    },
    FirmaStatu: {
        type: Number,
        default: 1
    },
    FirmaPuan: {
        type: Number
    },
    verified: {
        type: Boolean,
    },
    FirmaAckilama: {
        type: String,
    },
    FirmaPicture: {
        type: String,
        default: ''
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
    isAdmin: {
        type: Boolean,
        default: false,
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

module.exports = mongoose.model('Firma', FirmaSchema);