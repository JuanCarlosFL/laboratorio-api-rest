import { graphqlUrl } from 'common/constants';
import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(graphqlUrl);
