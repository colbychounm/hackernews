import gql from "graphql-tag";

const typeDefs = gql`
  # ********** Query **********
  type Query {
    item(id: Int!): BaseItem
    items(type: ListType!, first: Int, after: Int): ItemConnection!
    user(id: String!): User
  }

  # ********** Interface **********
  interface BaseItem {
    id: Int!
    type: ItemType!
    by: String!
    time: Int!
  }

  # ********** Type **********
  type ItemConnection {
    edges: [EdgeType!]!
    pageInfo: PageInfo!
  }

  type EdgeType {
    cursor: Int!
    node: BaseItem!
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: Int
  }

  type Story implements BaseItem {
    id: Int!
    by: String!
    type: ItemType!
    time: Int!
    text: String
    descendants: Int!
    kids: [Int!]
    score: Int!
    title: String!
    url: String
  }

  type Comment implements BaseItem {
    id: Int!
    by: String!
    type: ItemType!
    time: Int!
    text: String
    kids: [Int!]
    parent: Int!
  }

  type Job implements BaseItem {
    id: Int!
    by: String!
    type: ItemType!
    time: Int!
    score: Int!
    text: String
    title: String!
    url: String
  }

  type Poll implements BaseItem {
    id: Int!
    type: ItemType!
    by: String!
    time: Int!
    descendants: Int!
    kids: [Int!]
    parts: [Int!]!
    score: Int!
    text: String
    title: String!
  }

  type PollOpt implements BaseItem {
    id: Int!
    type: ItemType!
    by: String!
    time: Int!
    poll: Int!
    score: Int!
    text: String
  }

  type User {
    id: String!
    created: Int
    karma: Int
    about: String
    submitted: [Int]
  }

  # ********** Enum **********
  enum ItemType {
    job
    story
    comment
    poll
    pollopt
  }

  enum ListType {
    topstories
    newstories
    askstories
    showstories
    jobstories
  }
`;

export default typeDefs;
