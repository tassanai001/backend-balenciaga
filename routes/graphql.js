const express = require('express');
const router = express.Router();
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`
const resolvers = {
  Query: { books: () => books },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});



module.exports = router;
