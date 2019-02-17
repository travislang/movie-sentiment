const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// starts apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// passing in express as middleware
server.applyMiddleware({ app, cors: true });

app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
