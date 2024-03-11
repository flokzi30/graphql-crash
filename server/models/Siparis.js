const mongoose = require('mongoose');

const SiparisSchema = new mongoose.Schema({
    Ip: {
        type: Number,
        required: true
    },
    Durum: {
        type: String,
        required: true
    },
    FaturaAdresi: {
        type: String,
        required: true
    },
    FaturaAdresiIl: {
        type: String,
        required: true
    },
    FaturaAdresiIlce: {
        type: String,
        required: true
    },
    FaturaAdresiSemt: {
        type: String,
        required: true
    },
    TeslimatAdresi: {
        type: String,
        required: true
    },
    TeslimatAdresiIl: {
        type: String,
        required: true
    },
    TeslimatAdresiIlce: {
        type: String,
        required: true
    },
    TeslimatAdresiSemt: {
        type: String,
        required: true
    },
    OdemeYontemi: {
        type: String,
        required: true
    },
    KuponKodu: {
        type: String
    },
    Tarih: {
        type: Date,
        default: Date.now,
        required: true
    },
    Notu: {
        type: String
    },
    TeslimatSaati: {
        type: Number,
        required: true
    },
    TeslimatYeri: {
        type: String,
        required: true
    },
    TeslimatTelefon: {
        type: Number,
        required: true
    },
    TeslimatEPosta: {
        type: String,
        required: true
    },
    TeslimatAdSoyad: {
        type: String,
        required: true
    },
    FaturaTuru: {
        type: String
    },
    FaturaVergiNo: {
        type: String
    },
    FaturaUnvan: {
        type: String
    },
    FaturaVergiDairesi: {
        type: String
    },
    FaturaTelefon: {
        type: Number
    },
    FaturaEPosta: {
        type: String
    },
    FaturaAdSoyad: {
        type: String
    },
    HediyePaketi: {
        type: String
    },
    TeslimatKargoFirmasi: {
        type: String
    },
    TeslimatKargoNumarasi: {
        type: String
    },
    TeslimatPostaKodu: {
        type: Number,
        required: true
    },
    FaturatPostaKodu: {
        type: Number,
        required: true
    },
    RedNedeni: {
        type: String
    },
    RedKodu: {
        type: String
    },
    SipraisStatu: {
        type: Number,
        default: 1
    },
    MusteriId: {
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

module.exports = mongoose.model('Siparis', SiparisSchema);