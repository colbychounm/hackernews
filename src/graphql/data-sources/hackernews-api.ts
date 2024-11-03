import { RESTDataSource } from "@apollo/datasource-rest";

class HackerNewsAPI extends RESTDataSource {
  override baseURL = "https://hacker-news.firebaseio.com";

  async getUser(id: String) {
    return this.get(`/v0/user/${id}.json`);
  }

  async getItem(id: String) {
    return this.get(`/v0/item/${id}.json`);
  }
}

export default HackerNewsAPI;
