const { GraphQLObjectType } = require('graphql');
const firmaQueries = require('./firmaQueries');
const adisyonQueries = require('./adisyonQueries');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...firmaQueries,
        ...adisyonQueries
    }
});

module.exports = RootQuery;
