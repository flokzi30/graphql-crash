const mongoose = require('mongoose');

const YorumSchema = new mongoose.Schema({

    YorumIcerik: {
        type: String,
        required: true
    },
    YorumTarih: {
        type: Date,
        default: Date.now
    },
    Ip: {
        type: String
    },
    YorumStatu: {
        type: Number,
        default: 1
    },
    FirmaId: {
        type: String
    },
    MusteriId: {
        type: String
    },
    UserId:{
        type: String
    }
},
    {
        timestamps: {
            currentTime: () => {
                return new Date();
            },
        },
    }
);

module.exports = mongoose.model('Yorum', YorumSchema);