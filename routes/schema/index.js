const express = require('express');

const router = express.Router();
const { makeExecutableSchema } = require('graphql-tools');
const resolveFunctions = require('../resolvers');

console.log('resolveFunctions:--> ', resolveFunctions);

const typeDefinitions = `
type User {
  Name: String
  Surname: String
}

type RootQuery {
  User(Name: String, Surname: String): User
}

type RootMutation {
  createAuthor(Name: String!, Surname: String!): User
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

router.schema = makeExecutableSchema({
  typeDefs: typeDefinitions,
  resolvers: resolveFunctions,
});

module.exports = router;
