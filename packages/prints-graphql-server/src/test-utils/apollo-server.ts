import { createTestClient } from 'apollo-server-testing';
//import schema from '../schema'; // import existing schema & datasource to utilize the same in test scenarios as well...
import { ApolloServer, gql } from 'apollo-server';
import { RandomUserDataSource } from '../person/RandomUserDataSource';
import { HarvardArtPrintDataSource } from '../print/HarvardArtPrintDataSource';
import * as commonTypes from '../common/common-types';
import * as personTypes from '../person/person-types';
import * as printTypes from '../print/print-types';
import * as personResolvers from '../person/person-resolvers';
import * as printResolvers from '../print/print-resolvers';

const typeDefs = gql`
  ${commonTypes.typeDefString}
  ${personTypes.typeDefString}
  ${printTypes.typeDefString}
  type Query {
    ${personTypes.queryTypeDefString}
    ${printTypes.queryTypeDefString}
  }
`;

const resolvers = {
  Query: {
    ...personResolvers.resolvers.Query,
    ...printResolvers.resolvers.Query,
  },
};

const createApolloTestServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      randomUserAPI: new RandomUserDataSource(),
      harvardArtPrintAPI: new HarvardArtPrintDataSource(),
    }),
    debug: true,
    context: () => {
      // Important: request context is not available during jest testing, hence mocked the request context here.
      return { token: 'foo' };
    },
  });
  return server;
};

const apolloServer = createApolloTestServer();

// @ts-ignore
export const { query, mutate } = createTestClient(apolloServer);
