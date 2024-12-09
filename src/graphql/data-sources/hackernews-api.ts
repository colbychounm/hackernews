import { RESTDataSource } from "@apollo/datasource-rest";
import { ListType, User } from "../types/resolvers";

export type ItemDataSource = {
  id: number;
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  by: string;
  time: number;
  deleted?: boolean;
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: number[];
  descendants?: number;
};

class HackerNewsAPI extends RESTDataSource {
  override baseURL = "https://hacker-news.firebaseio.com";

  async getItems(type: ListType) {
    return this.get<number[]>(`/v0/${type}.json`);
  }

  async getItem(id: number) {
    return this.get<ItemDataSource>(`/v0/item/${id}.json`);
  }

  async getUser(id: string) {
    return this.get<User>(`/v0/user/${id}.json`);
  }
}

export default HackerNewsAPI;
