const typeDefinitions = `
type User {
  name: String
  surname: String
  product: [Product]!
}

type Product {
  name: String
  price: Int
}

type RootQuery {
  User(name: String!, surname: String!): User
  GetProduct(name: String!): Product
}

type RootMutation {
  CreateAuthor(name: String!, surname: String!): User
  CreateProduct(name: String!, price: Int!): Product
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

module.exports = typeDefinitions;
