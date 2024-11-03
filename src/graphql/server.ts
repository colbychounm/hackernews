import { ApolloServer } from "@apollo/server";
import resolvers from "./resolvers";
import typeDefs from "./type-defs";

export default new ApolloServer({
  resolvers,
  typeDefs,
});
