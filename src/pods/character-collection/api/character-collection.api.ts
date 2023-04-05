import { graphQLClient } from 'core/api/graphql.client';
import { gql } from 'graphql-request';

import {
  CharacterEntityApi,
  CharacterEntityItemApi,
} from './character-collection.api-model';

interface GetCharacterCollectionResponse {
  characters: CharacterEntityApi;
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityItemApi[]
> => {
  const query = gql`
    query {
      characters {
        results {
          id
          name
          status
          species
          gender
          image
        }
      }
    }
  `;

  const { characters } =
    await graphQLClient.request<GetCharacterCollectionResponse>(query);

  return characters.results;
};
