import HackerNewsAPI from "./data-sources/hackernews-api";

export interface MyContext {
  hackerNews: HackerNewsAPI;
}

export default async function context(): Promise<MyContext> {
  return { hackerNews: new HackerNewsAPI() };
}
