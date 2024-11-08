import HackerNewsAPI from "./hackernews-api";

const dataSources = { hackerNewsAPI: new HackerNewsAPI() };

export type DataSources = typeof dataSources;

export default dataSources;
