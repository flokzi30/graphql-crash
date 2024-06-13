const { GraphQLNonNull, GraphQLID } = require('graphql');
const { AdisyonType } = require('../types/AdisyonType');
const Adisyon = require('../../models/Adisyon');
const { generateGraphQLArgs } = require('../../utils/graphqlUtils');

const adisyonMutations = {
  addAdisyon: {
    type: AdisyonType,
    args: generateGraphQLArgs(Adisyon.schema),
    resolve(parent, args) {
      const adisyon = new Adisyon(args);
      return adisyon.save();
    }
  },
  updateAdisyon: {
    type: AdisyonType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
      ...generateGraphQLArgs(Adisyon.schema, true),
    },
    resolve(parent, args) {
      const { id, ...updateFields } = args;
      return Adisyon.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
    }
  },
  deleteAdisyon: {
    type: AdisyonType,
    args: { id: { type: GraphQLNonNull(GraphQLID) } },
    resolve(parent, args) {
      return Adisyon.findByIdAndDelete(args.id);
    }
  }
};

module.exports = adisyonMutations;
