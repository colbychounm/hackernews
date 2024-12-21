import { relayStylePagination } from "@apollo/client/utilities";
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export function makeClient() {
  return new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache({
      possibleTypes: {
        Item: ["Story", "Comment", "Job", "Poll", "PollOpt"],
      },
      typePolicies: {
        Query: {
          fields: {
            items: relayStylePagination(["type"]),
          },
        },
      },
    }),
  });
}
