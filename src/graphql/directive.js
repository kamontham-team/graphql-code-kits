const moment = require('moment');
const { SchemaDirectiveVisitor } = require('graphql-tools');
const { defaultFieldResolver, GraphQLString } = require('graphql');

const formatter = (input, format) => moment(input).format(format);

class formatDate extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { defaultFormat } = this.args;

    field.args.push({ name: 'format', type: GraphQLString });

    field.resolve = async function (source, { format, ...args }, context, info) {
      const result = await resolve.call(this, source, args, context, info);
      const transform = input => formatter(input, format || defaultFormat);
      if (!result) {
        return '';
      }
      return Array.isArray(result) ? result.map(transform) : transform(result);
    };

    field.type = GraphQLString;
  }
}
module.exports = {
  date: formatDate,
};
