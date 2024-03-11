const mongoose = require('mongoose');

const SiparisDetaySchema = new mongoose.Schema({
    siparisId: {
        type: String
    },
    urunAd: {
        type: String,
        required:true
    },
    urunSlug: {
        type: String,
        required:true
    },
    urunAdet: {
        type: String,
        required:true
    },
    urunFiyat: {
        type: String,
        required:true
    },
    urunIndirimliFiyat: {
        type: String
    },
    urunResim: {
        type: String,
        required:true
    },
},

);

module.exports = mongoose.model('SiparisDetay', SiparisDetaySchema);