const user = require('./user');
const products = require('./products');

const resolveFunctions = {
  RootQuery: {
    ...user,
    ...products,
  },
};


module.exports = resolveFunctions;
