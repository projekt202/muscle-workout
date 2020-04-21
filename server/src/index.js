const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const muscleDatabase = require("./datasources/muscle");
const resolvers = require('./resolvers');

const knexConfig = {
  client: 'mysql',
  connection: {
    host : 'muscle.cecxjrpqgwvo.us-east-1.rds.amazonaws.com',
    user : 'admin',
    password : 'test1234',
    database : 'muscle'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ 
    muscleDatabase: new muscleDatabase(knexConfig)
  })
 });


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Muscle server ready at ${url}`);
});