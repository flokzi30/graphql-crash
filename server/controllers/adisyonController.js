const { calculateDailyAppointmentPercentage } = require('../services/adisyonService');

const getDailyAppointmentPercentage = async (req, res) => {
    try {
        const firmaId = req.user._id;
        const result = await calculateDailyAppointmentPercentage(firmaId);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getDailyAppointmentPercentage
};
