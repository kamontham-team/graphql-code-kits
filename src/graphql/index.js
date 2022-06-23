const { resolve } = require('path');
const { ApolloServer } = require('apollo-server-express');
const { mergeTypeDefs, mergeResolvers, loadFiles, mergeSchemas, makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolver');
const directive = require('./directive');
require('../config/moment');

module.exports = async () => {
  const localSchemaArray = await loadFiles(resolve(__dirname, './examples/**/*.graphql'));
  const localSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([localSchemaArray.join().toString()]),
    resolvers: mergeResolvers([resolvers]),
  });

  return new ApolloServer({
    schema: mergeSchemas({
      schemas: [localSchema],
      schemaDirectives: {
        ...directive,
      },
    }),
    playground: true,
    context: ({ event, context = {}, req, res }) => {
      const headers = req.headers;
      return {
        event,
        context,
        headers,
        response: res,
      };
    },
    plugins: [],
  });
};