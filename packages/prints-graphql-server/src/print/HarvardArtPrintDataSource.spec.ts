import nock from 'nock';
import { initialize } from '../test-utils/setup';
import { HarvardArtPrintDataSource } from './HarvardArtPrintDataSource';
import restPrints from '../../../../fixtures/print/rest_printsonpage.json';

describe('HarvardArtPrintDataSource', () => {
  let harvardArtPrintAPI: HarvardArtPrintDataSource;

  beforeAll(() => {
    harvardArtPrintAPI = initialize(HarvardArtPrintDataSource);
  });

  it('by default, should return prints on page 1 in descending order', async () => {
    nock(
      'https://api.harvardartmuseums.org',
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
      .reply(200, restPrints);
    const response = await harvardArtPrintAPI.getPrints();
    expect(response.pageinfo).toEqual({ pagenumber: 1, totalpages: 6878, totalrecords: 68777 });
    expect(response.prints).toHaveLength(9); // not 10 because there is an empty image we are filtering out
    expect(response.prints[0].rank).toBeGreaterThan(response.prints[8].rank);
    expect(response).toMatchSnapshot();
  });

  it('should return prints on page 1 in ascending order when given that sortdir', async () => {
    nock(
      'https://api.harvardartmuseums.org',
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
      .reply(200, restPrints);
    const response = await harvardArtPrintAPI.getPrints('ASC');
    expect(response.pageinfo).toEqual({ pagenumber: 1, totalpages: 6878, totalrecords: 68777 });
    expect(response.prints).toHaveLength(9); // not 10 because there is an empty image we are filtering out
    expect(response.prints[0].rank).toBeLessThan(response.prints[8].rank);
    expect(response).toMatchSnapshot();
  });

  it('should return prints on page 2 in ascending order when given that sortdir', async () => {
    nock(
      'https://api.harvardartmuseums.org',
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
      .reply(200, restPrints);
    const response = await harvardArtPrintAPI.getPrints('ASC', 2);
    expect(response.pageinfo).toEqual({ pagenumber: 2, totalpages: 6878, totalrecords: 68777 });
    expect(response.prints).toHaveLength(9); // not 10 because there is an empty image we are filtering out
    expect(response.prints[0].rank).toBeLessThan(response.prints[8].rank);
    expect(response).toMatchSnapshot();
  });
});
