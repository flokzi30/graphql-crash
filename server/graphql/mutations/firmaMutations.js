const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLInt } = require('graphql');
const bcrypt = require('bcrypt');
const FirmaType = require('../types/FirmaType');
const Firma = require('../../models/Firma');

const saltRounds = 10;

const firmaMutations = {
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
            FirmaAd: { type: GraphQLNonNull(GraphQLString) }
        },
        async resolve(parent, args) {
            const hashedPassword = await bcrypt.hash(args.FirmaSifre, saltRounds);
            let firma = new Firma({
                FirmaTelNo: args.FirmaTelNo,
                FirmaEPosta: args.FirmaEPosta,
                FirmaSifre: hashedPassword,
                FirmaIl: args.FirmaIl,
                FirmaIlce: args.FirmaIlce,
                FirmaSemt: args.FirmaSemt,
                FirmaAdres: args.FirmaAdres,
                FirmaAcilis: args.FirmaAcilis,
                FirmaKapanis: args.FirmaKapanis,
                FirmaStatu: args.FirmaStatu,
                FirmaYetkili: args.FirmaYetkili,
                FirmaAd: args.FirmaAd
            });
            return firma.save();
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
            FirmaAd: { type: GraphQLString }
        },
        async resolve(parent, args) {
            let updateFields = {
                FirmaTelNo: args.FirmaTelNo,
                FirmaEPosta: args.FirmaEPosta,
                FirmaIl: args.FirmaIl,
                FirmaIlce: args.FirmaIlce,
                FirmaSemt: args.FirmaSemt,
                FirmaAdres: args.FirmaAdres,
                FirmaAcilis: args.FirmaAcilis,
                FirmaKapanis: args.FirmaKapanis,
                FirmaStatu: args.FirmaStatu,
                FirmaYetkili: args.FirmaYetkili,
                FirmaAd: args.FirmaAd
            };

            if (args.FirmaSifre) {
                const hashedPassword = await bcrypt.hash(args.FirmaSifre, saltRounds);
                updateFields.FirmaSifre = hashedPassword;
            }

            return Firma.findByIdAndUpdate(
                args.id,
                { $set: updateFields },
                { new: true }
            );
        }
    },
    deleteFirma: {
        type: FirmaType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
            return Firma.findByIdAndDelete(args.id);
        }
    },

};

module.exports = firmaMutations;
