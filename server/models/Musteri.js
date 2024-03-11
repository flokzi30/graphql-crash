const mongoose = require('mongoose');

const MusteriSchema = new mongoose.Schema({
    MusteriAdSoyad: {
        type: String,
    },
    MusteriTelNo: {
        type: String,
    },
    MusteriEPosta: {
        type: String
    },
    MusteriCinsiyet: {
        type: String
    },
    MusteriYasDagilimi: {
        type: String
    },
    MusteriDogumTarihi: {
        type: Date,
    },
    OnemliMusteriNotu: {
        type: String,
    },
    MusteriEkBilgiler: {
        type: String
    },
    MusteriToplamOdeme: {
        type: Number,
        default: 0
    },
    MusteriGecmisSiparis: {
        type: Array,
    },
    MusteriToplamZiyaret: {
        type: Number,
        default: 0
    },
    SonZiyaretTarihi: {
        type: String,
        default: 0
    },
    MusteriFotolar: {
        type: String
    },
    MusteriAvatar: {
        type: String
    },
    EmailGonder: {
        type: Boolean
    },
    SmsGonder: {
        type: Boolean
    },
    EmailKabul: {
        type: Boolean
    },
    SmsKabul: {
        type: Boolean
    },
    MusteriFrequency: {
        type: String,
        default: "new"
    },
    MusteriStatu: {
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

module.exports = mongoose.model('Musteri', MusteriSchema);
