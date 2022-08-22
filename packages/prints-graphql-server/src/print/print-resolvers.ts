/* This is just here as an example of a different API to merge into the combined GraphQL API */
export const resolvers = {
  Query: {
    // @ts-ignore
    printsonpage: (_a, { sortdir, pagenumber }, { dataSources }) => {
      return dataSources.harvardArtPrintAPI.getPrints(sortdir, pagenumber);
    },
  },
};
