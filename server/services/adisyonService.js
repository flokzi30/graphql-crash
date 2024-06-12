const Adisyon = require('../models/Adisyon');

const calculateDailyAppointmentPercentage = async (firmaId) => {
    console.log('firmaId:', firmaId);
    try {
        const today = new Date();
        const startOfLastWeek = new Date(today);
        startOfLastWeek.setDate(today.getDate() - 7);
        startOfLastWeek.setHours(0, 0, 0, 0);

        const endOfLastWeek = new Date(today);
        endOfLastWeek.setDate(today.getDate() - 1);
        endOfLastWeek.setHours(23, 59, 59, 999);

        const lastWeekAdisyons = await Adisyon.find({
            FirmaId: firmaId,
            AdisyonDurum: 4,
            AdisyonStatu: 1,
            AdisyonRandevuTarihi: {
                $gte: startOfLastWeek,
                $lte: endOfLastWeek
            }
        });
        console.log('lastWeekAdisyons:', lastWeekAdisyons);

        const startOfToday = new Date(today);
        startOfToday.setHours(0, 0, 0, 0);

        const endOfToday = new Date(today);
        endOfToday.setHours(23, 59, 59, 999);

        const todayAdisyons = await Adisyon.find({
            FirmaId: firmaId,
            AdisyonDurum: 4,
            AdisyonStatu: 1,
            AdisyonRandevuTarihi: {
                $gte: startOfToday,
                $lte: endOfToday
            }
        });
        console.log('todayAdisyons:', todayAdisyons);

        let lastWeekCounts = [];
        for (let i = 6; i >= 0; i--) {
            const startOfDay = new Date(today);
            startOfDay.setDate(today.getDate() - i);
            startOfDay.setHours(0, 0, 0, 0);

            const endOfDay = new Date(today);
            endOfDay.setDate(today.getDate() - i);
            endOfDay.setHours(23, 59, 59, 999);

            const dayAdisyons = await Adisyon.find({
                FirmaId: firmaId,
                AdisyonDurum: 4,
                AdisyonStatu: 1,
                AdisyonRandevuTarihi: {
                    $gte: startOfDay,
                    $lte: endOfDay
                }
            });

            lastWeekCounts.push(dayAdisyons.length);
        }

        const averageLastWeek = lastWeekAdisyons.length / 7;
        let percentageChange = 0;
        if (averageLastWeek > 0) {
            percentageChange = ((todayAdisyons.length - averageLastWeek) / averageLastWeek) * 100;
        }
        const todayAdisyon = todayAdisyons.length;
        const todayAdisyonPercentage = percentageChange.toFixed(1);

        return { todayAdisyon, todayAdisyonPercentage, lastWeekCounts };
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Server error');
    }
};

module.exports = {
    calculateDailyAppointmentPercentage
};
