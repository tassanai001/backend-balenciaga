// const { SampleModel } = require('../connectors');

const resolve = {
  CreateAuthor: (root, args) => {
    console.log('createAuthor Args:--> ', args);
    console.log('createAuthor Root:--> ', root);
  },
};
module.exports = resolve;
