const { GraphQLList, GraphQLID, GraphQLString } = require('graphql');
const FirmaType = require('../types/FirmaType');
const Firma = require('../../models/Firma');
const { AdisyonType } = require('../types/AdisyonType');
const Adisyon = require('../../models/Adisyon');
const { AdisyonPercentageType } = require('../types/AdisyonType');
const { calculateDailyAppointmentPercentage } = require('../../services/adisyonService');

const firmaQueries = {
    welcomeMessage: {
        type: GraphQLString,
        resolve(parent, args, context) {
            if (!context.user) {
                throw new Error('Unauthorized');
            }
            return `Welcome, ${context.user.FirmaEPosta}`;
        }
    },
    firmaAdisyons: {
        type: new GraphQLList(AdisyonType),
        args: { FirmaId: { type: GraphQLID } },
        resolve(parent, args, context) {
            if (!context.user) {
                throw new Error('Unauthorized');
            }
            return Adisyon.find({ FirmaId: context.user.id });
        }
    },
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
    gunlukRandevuYuzde: {
        type: AdisyonPercentageType,
        args: {
            firmaId: { type: GraphQLID }
        },
        async resolve(parent, args, context) {
            try {
                const { firmaId } = args;
                console.log('firmaId:', firmaId);
                const result = await calculateDailyAppointmentPercentage(firmaId);
                return result;
            } catch (error) {
                console.error('Error:', error);
                throw new Error('Server error');
            }
        }
    },
};

module.exports = firmaQueries;
