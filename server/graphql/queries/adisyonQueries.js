const { GraphQLList, GraphQLID } = require('graphql');
const {AdisyonType} = require('../types/AdisyonType');
const Adisyon = require('../../models/Adisyon');

const adisyonQueries = {
    adisyons: {
        type: new GraphQLList(AdisyonType),
        args: { FirmaId: { type: GraphQLID } },
        resolve(parent, args) {
            return Adisyon.find({ FirmaId: args.FirmaId });
        }
    },
    adisyon: {
        type: AdisyonType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return Adisyon.findById(args.id);
        }
    },
    lastTwoAppointments: {
        type: new GraphQLList(AdisyonType),
        args: { FirmaId: { type: GraphQLID } },
        resolve(parent, args) {
            return Adisyon.find({ FirmaId: args.FirmaId })
                .sort({ AdisyonRandevuTarihi: -1 })
                .limit(3);
        }
    }
};

module.exports = adisyonQueries;
