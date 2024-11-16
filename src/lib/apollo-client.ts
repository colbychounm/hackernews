import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export function makeClient() {
  return new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });
}
