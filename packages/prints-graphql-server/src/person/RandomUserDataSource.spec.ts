import nock from 'nock';
import { initialize } from '../test-utils/setup';
import { RandomUserDataSource } from './RandomUserDataSource';

const validRestResponse = { results: { foo: 'bar' } };

describe('RandomUserDataSource', () => {
  let randomUserAPI: RandomUserDataSource;

  beforeAll(() => {
    randomUserAPI = initialize(RandomUserDataSource);
  });

  it('should return person object', async () => {
    nock(
      'https://api.randomuser.me',
      // Wildcard match the path for simplicity
      {
        filteringScope: function (scope) {
          return true;
        },
      },
    )
      .filteringPath(function (path) {
        return '/';
      })
      .get('/')
      .reply(200, validRestResponse);
    const response = await randomUserAPI.getPerson();
    expect(response).toEqual({ foo: 'bar' });
    expect(response).toMatchSnapshot();
  });
});
