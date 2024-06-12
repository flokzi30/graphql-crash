const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLBoolean } = require('graphql');
const { AdisyonType } = require('../types/AdisyonType');
const Adisyon = require('../../models/Adisyon');

const adisyonFields = {
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
    lastReminderSent: { type: GraphQLString }
};

const adisyonMutations = {
    addAdisyon: {
        type: AdisyonType,
        args: adisyonFields,
        resolve(parent, args) {
            const adisyon = new Adisyon(args);
            return adisyon.save();
        }
    },
    updateAdisyon: {
        type: AdisyonType,
        args: {
            id: { type: GraphQLID },
            ...adisyonFields
        },
        resolve(parent, args) {
            const { id, ...updateFields } = args;
            return Adisyon.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
        }
    },
    deleteAdisyon: {
        type: AdisyonType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return Adisyon.findByIdAndDelete(args.id);
        }
    }
};

module.exports = adisyonMutations;
