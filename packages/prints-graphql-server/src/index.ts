import { ApolloServer, gql } from 'apollo-server';
import { RandomUserDataSource } from './person/RandomUserDataSource';
import { HarvardArtPrintDataSource } from './print/HarvardArtPrintDataSource';
import * as commonTypes from './common/common-types';
import * as personTypes from './person/person-types';
import * as printTypes from './print/print-types';
import * as personResolvers from './person/person-resolvers';
import * as printResolvers from './print/print-resolvers';

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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    randomUserAPI: new RandomUserDataSource(),
    harvardArtPrintAPI: new HarvardArtPrintDataSource(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
