/* This is just here as an example of a different API to merge into the combined GraphQL API */

import { RESTDataSource } from 'apollo-datasource-rest';

export class RandomUserDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.randomuser.me/';
  }

  async getPerson() {
    const { results } = await this.get('');
    return results;
  }
}
