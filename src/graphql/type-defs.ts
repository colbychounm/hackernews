import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    user(id: ID!): User
    item(id: ID!): Item
  }

  type Item {
    id: ID!
    deleted: Boolean
    type: ItemType!
    by: String
    time: Int
    text: String
    dead: Boolean
    parent: Int
    poll: Int
    kids: [Int]
    url: String
    score: Int
    title: String
    parts: [Int]
    descendants: Int
  }

  type User {
    id: ID!
    created: Int
    karma: Int
    about: String
    submitted: [Int]
  }

  enum ItemType {
    JOB
    STORY
    COMMENT
    POLL
    POLL_OPT
  }
`;

export default typeDefs;
