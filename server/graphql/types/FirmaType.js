const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } = require('graphql');
const { AdisyonType } = require('./AdisyonType');
const Firma = require('../../models/Firma');
const Adisyon = require('../../models/Adisyon');

const FirmaType = new GraphQLObjectType({
    name: 'Firma',
    fields: () => ({
        id: { type: GraphQLID },
        FirmaTelNo: { type: GraphQLString },
        FirmaEPosta: { type: GraphQLString },
        FirmaSifre: { type: GraphQLString },
        FirmaIl: { type: GraphQLString },
        FirmaIlce: { type: GraphQLString },
        FirmaSemt: { type: GraphQLString },
        FirmaAdres: { type: GraphQLString },
        FirmaAcilis: { type: GraphQLString },
        FirmaKapanis: { type: GraphQLString },
        FirmaStatu: { type: GraphQLInt },
        FirmaYetkili: { type: GraphQLString },
        FirmaAd: { type: GraphQLString },
        adisyons: {
            type: new GraphQLList(AdisyonType),
            resolve(parentValue, args) {
                return Adisyon.find({ FirmaId: parentValue.id });
            }
        }
    })
});

module.exports = FirmaType;
