const mongoose = require('mongoose');

const AdisyonSchema = new mongoose.Schema({
    AdisyonMusteri: {
        type: Array,
    },
    AdisyonNumara: {
        type: String
    },
    AdisyonBitisTarihi: {
        type: Date
    },
    AdisyonHizmet: {
        type: Array,
        required: true,
    },
    AdisyonRandevuTarihi: {
        type: Date,
        required: true
    },
    AdisyonUrun: {
        type: Array,
    },
    AdisyonIlgiliPersonel: {
        type: Array,
    },
    AdisyonAdet: {
        type: Number,
    },
    AdisyonNot: {
        type: String,
    },
    AdisyonFiyat: {
        type: Number,
    },
    AdisyonIndirim: {
        type: Number,
    },
    AdisyonBahsis: {
        type: Number,
    },
    AdisyonGenelToplam: {
        type: Number,
    },
    AdisyonDurum: {
        type: Number
        // 1. Onay Bekliyor , 2. Randevu Bekleniyor , 3. İşleme Başlandı, 4. İşlem Tamamlandı, 5. Randevu İptal Edildi, 6. Müşteri Gelmedi:
    },
    AdisyonStatu: {
        type: Number,
        default: 1
    },
    AdisyonOdemeYontemi: {
        type: Number,
    },
    FirmaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firma',
    },
    AdisyonOnlineRandevu: {
        type: Boolean,
        default: false
    },
    allDay: {
        type: Boolean,
    },
    eventType: {
        type: String,
        default: 'adisyon'
    },
    color: {
        type: String,
    },
    lastReminderSent: {
        type: Date,
        default: null,
    }


},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Adisyon', AdisyonSchema);


