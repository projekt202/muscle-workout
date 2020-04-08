const { gql } = require('apollo-server');

const typeDefs = gql`
  type Muscle {
    id: ID!
    name: String
    description: String
    videos: [Video]
  }

  type Video {
    id: ID!
    name: String
    description: String
    videoLink: String
    imageLink: String
    muscles: [Muscle]
  }

  type Query {
    muscles: [Muscle]!
    muscle(id: ID!): Muscle
    videos: [Video]!
    video(id: ID!): Video 
  }
`;



module.exports = typeDefs;