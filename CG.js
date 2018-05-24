const express = require('express');

const router = express.Router();
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');

const config = {
  host: 'localhost',
  port: '27017',
  db: 'sample',
};

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  }, {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

router.schema = makeExecutableSchema({ typeDefs, resolvers });

router.getMongoCon = async () => {
  const uri = `mongodb://${config.host}:${config.port}/'${config.db}`;
  const db = mongoose.createConnection(uri);
  db.on('open', () => {
    console.log('DB Connect Success');
  });
  db.on('error', (err) => {
    console.log(`DB Connect ERROR:${err}`);
  });
  return db;
};

module.exports = router;
