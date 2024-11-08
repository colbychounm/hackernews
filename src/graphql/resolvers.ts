import { Resolvers } from "@/generated/graphql";
import { MyContext } from "./context";

const resolvers: Resolvers<MyContext> = {
  Query: {
    async user(_, { id }, { dataSources }) {
      return dataSources.hackerNewsAPI.getUser(id);
    },
  },
};

export default resolvers;
