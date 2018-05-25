// const { SampleModel } = require('../connectors');

const resolve = {
  CreateProduct: (root, args) => {
    console.log('From CreateProduct ARGS:--> ', args);
    console.log('From CreateProduct ROOT:--> ', root);
    // return SampleModel.create(args);
  },
};
module.exports = resolve;
