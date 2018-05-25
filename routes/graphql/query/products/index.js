// const { SampleModel } = require('../connectors');

const resolveFunctions = {
  GetProduct(root, args) {
    console.log('From GetProduct ARGS:--> ', args);
    console.log('From GetProduct ROOT:--> ', root);
  },
};
module.exports = resolveFunctions;
