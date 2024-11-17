import { MyContext } from "./context";
import { ItemType, Resolvers } from "./types/resolvers";
import { generateConnection } from "./utils";

const resolvers: Resolvers<MyContext> = {
  Query: {
    async items(_, { type, first, after }, { dataSources }) {
      console.log("query");
      const ids = await dataSources.hackerNewsAPI.getItems(type);

      return generateConnection(
        ids,
        (id: number) => dataSources.hackerNewsAPI.getItem(id),
        first,
        after
      );
    },
    async item(_, { id }, { dataSources }) {
      return dataSources.hackerNewsAPI.getItem(Number(id));
    },
  },
  Item: {
    __resolveType(obj) {
      switch (obj.type) {
        case ItemType.Story:
          return "Story";
        case ItemType.Comment:
          return "Comment";
        case ItemType.Job:
          return "Job";
        case ItemType.Poll:
          return "Poll";
        case ItemType.Pollopt:
          return "PollOpt";
        default:
          return null;
      }
    },
  },
};

export default resolvers;
