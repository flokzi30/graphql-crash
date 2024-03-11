const mongoose = require('mongoose');

const RelationShip = new mongoose.Schema({
    PersonelId: {
        type: String
    },
    ContentId: {
        type: String
    },
    Type: {
        type: String,
    },
    PrimOrani: {
        type: Number
    },

},
    {
        timestamps: {
            currentTime: () => {
                return new Date();
            },
        },
    });

module.exports = mongoose.model('RelationShips', RelationShip);
