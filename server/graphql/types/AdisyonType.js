const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLBoolean } = require('graphql');
const FirmaType = require('./FirmaType');
const Firma = require('../../models/Firma');

const AdisyonType = new GraphQLObjectType({
    name: 'Adisyon',
    fields: () => ({
        id: { type: GraphQLID },
        AdisyonMusteri: { type: new GraphQLList(GraphQLString) },
        AdisyonNumara: { type: GraphQLString },
        AdisyonBitisTarihi: { type: GraphQLString },
        AdisyonHizmet: { type: new GraphQLList(GraphQLString) },
        AdisyonRandevuTarihi: { type: GraphQLString },
        AdisyonUrun: { type: new GraphQLList(GraphQLString) },
        AdisyonIlgiliPersonel: { type: new GraphQLList(GraphQLString) },
        AdisyonAdet: { type: GraphQLInt },
        AdisyonNot: { type: GraphQLString },
        AdisyonFiyat: { type: GraphQLFloat },
        AdisyonIndirim: { type: GraphQLFloat },
        AdisyonBahsis: { type: GraphQLFloat },
        AdisyonGenelToplam: { type: GraphQLFloat },
        AdisyonDurum: { type: GraphQLInt },
        AdisyonStatu: { type: GraphQLInt },
        AdisyonOdemeYontemi: { type: GraphQLInt },
        FirmaId: { type: GraphQLID },
        AdisyonOnlineRandevu: { type: GraphQLBoolean },
        allDay: { type: GraphQLBoolean },
        eventType: { type: GraphQLString },
        color: { type: GraphQLString },
        lastReminderSent: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
});

const AdisyonPercentageType = new GraphQLObjectType({
    name: 'AdisyonPercentage',
    fields: () => ({
        todayAdisyon: { type: GraphQLInt },
        todayAdisyonPercentage: { type: GraphQLFloat },
        lastWeekCounts: { type: new GraphQLList(GraphQLInt) },
        FirmaId: { type: GraphQLID },
    })
});

module.exports = {
    AdisyonType,
    AdisyonPercentageType
};
