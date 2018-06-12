// const { SampleModel } = require('../connectors');

const resolveFunctions = {
  User(root, args) {
    console.log('User Args:--> ', args);
    console.log('User Root:--> ', root);
    return args;
  },
};
module.exports = resolveFunctions;
