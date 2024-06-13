const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLBoolean, GraphQLList } = require('graphql');
const Adisyon = require('../../models/Adisyon');
const { AdisyonType } = require('./AdisyonType');

const socialLinkType = new GraphQLObjectType({
    name: 'SocialLink',
    fields: () => ({
        facebook: { type: GraphQLString },
        twitter: { type: GraphQLString },
        instagram: { type: GraphQLString },
        tiktok: { type: GraphQLString },
    }),
});

const FirmaType = new GraphQLObjectType({
    name: 'Firma',
    fields: () => ({
        id: { type: GraphQLID },
        FirmaAd: { type: GraphQLString },
        FirmaYetkili: { type: GraphQLString },
        FirmaTelNo: { type: GraphQLString },
        FirmaEPosta: { type: GraphQLString },
        FirmaSifre: { type: GraphQLString },
        FirmaIl: { type: GraphQLString },
        FirmaIlce: { type: GraphQLString },
        FirmaSocialLinks: { type: new GraphQLList(socialLinkType) },
        FirmaSemt: { type: GraphQLString },
        FirmaAdres: { type: GraphQLString },
        FirmaAcilis: { type: GraphQLString },
        FirmaKapanis: { type: GraphQLString },
        FirmaCalismaGunler: { type: new GraphQLList(GraphQLString) },
        FirmaStatu: { type: GraphQLInt },
        FirmaPuan: { type: GraphQLInt },
        verified: { type: GraphQLBoolean },
        FirmaAckilama: { type: GraphQLString },
        FirmaPicture: { type: GraphQLString },
        newEmail: { type: GraphQLString },
        emailVerificationToken: { type: GraphQLString },
        emailTokenExpires: { type: GraphQLString },
        isAdmin: { type: GraphQLBoolean },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        adisyons: {
            type: new GraphQLList(AdisyonType),
            resolve(parentValue, args) {
                return Adisyon.find({ FirmaId: parentValue.id });
            }
        }
    }),
});

module.exports = FirmaType;
