const date = require('./examples/date/date');
const resolvers = {
  date
};

let Query = {};
let Mutation = {};
let Resolvers = {};

Object.keys(resolvers).forEach(key => {
  const resolver = resolvers[key];
  Query = { ...resolver.queries, ...Query };
  Mutation = { ...resolver.mutations, ...Mutation };
  Resolvers = { ...resolver.resolvers, ...Resolvers };
});

module.exports = {
  Query,
  Mutation,
  ...Resolvers,
};
