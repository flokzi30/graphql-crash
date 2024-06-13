const { GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLFloat } = require('graphql');

const getGraphQLType = (mongooseType) => {
  switch (mongooseType) {
    case String:
      return GraphQLString;
    case Number:
      return GraphQLFloat; // Use GraphQLFloat to handle both integers and floats
    case Boolean:
      return GraphQLBoolean;
    case Array:
      return GraphQLList; // Generic array type, needs further resolution
    default:
      return GraphQLString;
  }
};

const generateGraphQLArgs = (schema, isUpdate = false) => {
  const args = {};
  schema.eachPath((path, type) => {
    if (path === '_id' || path === '__v') return; // Skip internal fields

    let graphQLType;
    if (type.instance === 'Array') {
      const arrayType = getGraphQLType(type.options.type[0] || String);
      graphQLType = new GraphQLList(arrayType);
    } else {
      graphQLType = getGraphQLType(type.options.type);
    }

    if (!isUpdate && (type.isRequired || type.options.required)) {
      graphQLType = GraphQLNonNull(graphQLType);
    }
    args[path] = { type: graphQLType };
  });
  return args;
};

module.exports = { generateGraphQLArgs };
