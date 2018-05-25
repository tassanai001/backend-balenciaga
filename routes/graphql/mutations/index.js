const user = require('./user');
const products = require('./products');

const resolveFunctions = {
  RootMutation: {
    ...user,
    ...products,
  },
};


module.exports = resolveFunctions;
