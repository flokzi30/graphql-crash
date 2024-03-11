const mongoose = require('mongoose');

const TimeOffSchema = new mongoose.Schema({
    personelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Personel' },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    allDay: { type: Boolean, default: false },
    eventType: { type: String, default: 'time_off' }, // To differentiate between regular appointments and time offs
    // other fields as necessary
}, { timestamps: true });

module.exports = mongoose.model('TimeOff', TimeOffSchema);
