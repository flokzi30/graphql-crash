

// Mongoose models
const Adisyon = require('../models/Adisyon');
const Firma = require('../models/Firma');
const Personel = require('../models/Personel');
const Urun = require('../models/Urun');
const Kategori = require('../models/Kategori');
const Musteri = require('../models/Musteri');


const {

    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull

} = require('graphql');

// CLient Type
const AdisyonType = new GraphQLObjectType({
    name: 'Adisyon',
    fields: () => ({
        id: { type: GraphQLID },
        AdisyonMusteri: { type: new GraphQLList(GraphQLString) },
        AdisyonNumara: { type: GraphQLString },
        AdisyonBitisTarihi: { type: GraphQLString },
        AdisyonHizmet: { type: new GraphQLList(GraphQLString) },
        FirmaId: { type: GraphQLID },
        AdisyonRandevuTarihi: { type: GraphQLString },
        FirmaId: {
            type: FirmaType,
            resolve(parent, args) {
                return Firma.findById(parent.FirmaId);
            }
        }
    })
});


// Project Type
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
        client: {
            type: AdisyonType,
            resolve(parent, args) {
                return Adisyon.findById(parent.FirmaId);
            }
        }
    })
});



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        firmas: {
            type: new GraphQLList(FirmaType),
            resolve(parent, args) {
                return Firma.find();
            }
        },
        firma: {
            type: FirmaType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Firma.findById(args.id);
            }


        },
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
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addFirma: {
            type: FirmaType,
            args: {
                FirmaTelNo: { type: GraphQLNonNull(GraphQLString) },
                FirmaEPosta: { type: GraphQLNonNull(GraphQLString) },
                FirmaSifre: { type: GraphQLNonNull(GraphQLString) },
                FirmaIl: { type: GraphQLNonNull(GraphQLString) },
                FirmaIlce: { type: GraphQLNonNull(GraphQLString) },
                FirmaSemt: { type: GraphQLNonNull(GraphQLString) },
                FirmaAdres: { type: GraphQLNonNull(GraphQLString) },
                FirmaAcilis: { type: GraphQLNonNull(GraphQLString) },
                FirmaKapanis: { type: GraphQLNonNull(GraphQLString) },

                FirmaStatu: { type: GraphQLInt },
                FirmaYetkili: { type: GraphQLNonNull(GraphQLString) },
                FirmaAd: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                let firma = new Firma({
                    FirmaTelNo: args.FirmaTelNo,
                    FirmaEPosta: args.FirmaEPosta,
                    FirmaSifre: args.FirmaSifre,
                    FirmaIl: args.FirmaIl,
                    FirmaIlce: args.FirmaIlce,
                    FirmaSemt: args.FirmaSemt,
                    FirmaAdres: args.FirmaAdres,
                    FirmaAcilis: args.FirmaAcilis,
                    FirmaKapanis: args.FirmaKapanis,
                    FirmaStatu: args.FirmaStatu,
                    FirmaSocialLinks: args.FirmaSocialLinks,
                    FirmaYetkili: args.FirmaYetkili,
                    FirmaAd: args.FirmaAd
                });
                return firma.save();
            }
        },
        addAdisyon: {
            type: AdisyonType,
            args: {
                AdisyonMusteri: { type: GraphQLString },
                AdisyonNumara: { type: GraphQLString },
                AdisyonBitisTarihi: { type: GraphQLString },
                AdisyonHizmet: { type: GraphQLString },
                FirmaId: { type: GraphQLID },
                AdisyonRandevuTarihi: { type: GraphQLString }
            },
            resolve(parent, args) {
                let adisyon = new Adisyon({
                    AdisyonMusteri: args.AdisyonMusteri,
                    AdisyonNumara: args.AdisyonNumara,
                    AdisyonBitisTarihi: args.AdisyonBitisTarihi,
                    AdisyonHizmet: args.AdisyonHizmet,
                    FirmaId: args.FirmaId,
                    AdisyonRandevuTarihi: args.AdisyonRandevuTarihi
                });
                return adisyon.save();
            }
        },
        updateFirma: {
            type: FirmaType,
            args: {
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
            },
            resolve(parent, args) {
                return Firma.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            FirmaTelNo: args.FirmaTelNo,
                            FirmaEPosta: args.FirmaEPosta,
                            FirmaSifre: args.FirmaSifre,
                            FirmaIl: args.FirmaIl,
                            FirmaIlce: args.FirmaIlce,
                            FirmaSemt: args.FirmaSemt,
                            FirmaAdres: args.FirmaAdres,
                            FirmaAcilis: args.FirmaAcilis,
                            FirmaKapanis: args.FirmaKapanis,
                            FirmaStatu: args.FirmaStatu,
                            FirmaYetkili: args.FirmaYetkili,
                            FirmaAd: args.FirmaAd
                        }
                    },
                    { new: true }
                );
            },
        },
        deleteFirma: {
            type: FirmaType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Firma.findByIdAndDelete(args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});