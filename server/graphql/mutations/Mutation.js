const { GraphQLObjectType } = require('graphql');
const firmaMutations = require('./firmaMutations');
const adisyonMutations = require('./adisyonMutations');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...firmaMutations,
        ...adisyonMutations
    }
});

module.exports = Mutation;
