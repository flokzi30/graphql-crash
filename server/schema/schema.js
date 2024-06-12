const { GraphQLSchema } = require('graphql');
const RootQuery = require('../graphql/queries/RootQuery');
const Mutation = require('../graphql/mutations/Mutation');

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});