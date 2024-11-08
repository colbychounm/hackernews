import dataSources from "./data-sources";

export interface MyContext {
  dataSources: typeof dataSources;
}

export default async function context(): Promise<MyContext> {
  return { dataSources };
}
