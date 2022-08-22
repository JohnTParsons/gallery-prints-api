import { RESTDataSource } from 'apollo-datasource-rest';

// FIXME - throw error, rather than using fallbacks, if env var(s) not set?
const HARVARD_ART_BASE_URL = process.env.HARVARD_ART_BASE_URL || 'https://api.harvardartmuseums.org/';
const HARVARD_ART_API_KEY = process.env.HARVARD_ART_API_KEY || 'c28e4be0-4c0e-11ea-90d6-25d9a9fe80fc';

export class HarvardArtPrintDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = HARVARD_ART_BASE_URL;
  }

  async getPrints(sortdir = 'DESC', pagenumber = 1, pagesize = 10) {
    console.log(`Calling getPrints with pagesize=${pagesize} pagenumber=${pagenumber}`);
    const { info, records } = await this.get(
      `object?apikey=${HARVARD_ART_API_KEY}&classification=Prints&size=${pagesize}&page=${pagenumber}`,
    );
    return {
      pageinfo: { pagenumber, totalpages: Math.ceil(info.totalrecords / pagesize), totalrecords: info.totalrecords },
      prints: records
        .map(({ id, title, technique, primaryimageurl, rank }) => ({ id, title, technique, primaryimageurl, rank }))
        .filter((record) => record.primaryimageurl && record)
        .sort((a, b) => (sortdir === 'DESC' ? b.rank - a.rank : a.rank - b.rank)),
    };
  }
}
