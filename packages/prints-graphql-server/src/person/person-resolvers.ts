/* This is just here as an example of a different API to merge into the combined GraphQL API */

export const resolvers = {
  Query: {
    // @ts-ignore
    randomPerson: (_, __, { dataSources }) => {
      return dataSources.randomUserAPI.getPerson();
    },
  },
};
