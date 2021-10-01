const { resolvers } = require('../resolvers');

module.exports.graphql = async (event) => {
  try {
    console.log(`Getting data for field ${event.field}`);
    const data = resolvers[event.field](event.arguments);

    return data;
  } catch (e) {
    console.error('Error getting data', e);
    throw new Error(e);
  }
};
