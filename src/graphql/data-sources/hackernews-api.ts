import { RESTDataSource } from "@apollo/datasource-rest";
import { Item, ListType } from "../types/resolvers";

class HackerNewsAPI extends RESTDataSource {
  override baseURL = "https://hacker-news.firebaseio.com";

  async getItems(type: ListType) {
    return this.get<number[]>(`/v0/${type}.json`);
  }

  async getItem(id: number) {
    return this.get<Item>(`/v0/item/${id}.json`);
  }
}

export default HackerNewsAPI;
