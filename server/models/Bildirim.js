const mongoose = require('mongoose');

const BildirimSchema = new mongoose.Schema({
    FirmaId: {
        type: String
    },
    Icerik: {
        type: String
    },
    Okundu: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: {
            currentTime: () => {
                return new Date();
            },
        },
    });

module.exports = mongoose.model('Bildirim', BildirimSchema);
