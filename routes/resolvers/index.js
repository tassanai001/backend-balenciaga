// const { SampleModel } = require('../connectors');

const resolveFunctions = {
  RootQuery: {
    User(root, args) {
      console.log('User Args:--> ', args);
      console.log('User Root:--> ', root);
    },
  },
  RootMutation: {
    createAuthor: (root, args) => {
      console.log('createAuthor Args:--> ', args);
      console.log('createAuthor Root:--> ', root);
      // return SampleModel.create(args);
    },
  },
};
module.exports = resolveFunctions;
