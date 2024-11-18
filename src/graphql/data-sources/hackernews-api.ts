import { RESTDataSource } from "@apollo/datasource-rest";
import { BaseItem, ListType, User } from "../types/resolvers";

class HackerNewsAPI extends RESTDataSource {
  override baseURL = "https://hacker-news.firebaseio.com";

  async getItems(type: ListType) {
    return this.get<number[]>(`/v0/${type}.json`);
  }

  async getItem(id: number) {
    return this.get<BaseItem>(`/v0/item/${id}.json`);
  }

  async getUser(id: string) {
    return this.get<User>(`/v0/user/${id}.json`);
  }
}

export default HackerNewsAPI;
