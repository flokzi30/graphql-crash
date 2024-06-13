const { GraphQLNonNull, GraphQLID } = require('graphql');
const bcrypt = require('bcrypt');
const FirmaType = require('../types/FirmaType');
const Firma = require('../../models/Firma');
const { generateGraphQLArgs } = require('../../utils/graphqlUtils');

const saltRounds = 10;

const firmaMutations = {
  addFirma: {
    type: FirmaType,
    args: generateGraphQLArgs(Firma.schema),
    async resolve(parent, args) {
      const hashedPassword = await bcrypt.hash(args.FirmaSifre, saltRounds);
      let firma = new Firma({
        ...args,
        FirmaSifre: hashedPassword,
      });
      return firma.save();
    },
  },
  updateFirma: {
    type: FirmaType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
      ...generateGraphQLArgs(Firma.schema, true),
    },
    async resolve(parent, args) {
      const { id, FirmaSifre, ...updateFields } = args;

      if (FirmaSifre) {
        const hashedPassword = await bcrypt.hash(FirmaSifre, saltRounds);
        updateFields.FirmaSifre = hashedPassword;
      }

      return Firma.findByIdAndUpdate(
        id,
        { $set: updateFields },
        { new: true }
      );
    },
  },
  deleteFirma: {
    type: FirmaType,
    args: { id: { type: GraphQLNonNull(GraphQLID) } },
    resolve(parent, args) {
      return Firma.findByIdAndDelete(args.id);
    },
  },
};

module.exports = firmaMutations;
x