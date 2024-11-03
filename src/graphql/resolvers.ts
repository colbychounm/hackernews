import { Resolvers } from "@/generated/graphql";
import { MyContext } from "./context";

const resolvers: Resolvers<MyContext> = {
  Query: {
    async user(_, { id }, { hackerNews }) {
      return hackerNews.getUser(id);
    },
  },
};

export default resolvers;
