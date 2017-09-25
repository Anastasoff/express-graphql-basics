const express = require('express');
const graphqlHTTP = require('express-graphql');

const MyGraphQlSchema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: MyGraphQlSchema,
  graphiql: true
}));

const SERVER_PORT = 4000;

app.listen(SERVER_PORT);

console.log(`Listening on port ${SERVER_PORT} ...`);
