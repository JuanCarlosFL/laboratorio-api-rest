import { Character } from './character.api-model';
import { graphQLClient } from 'core/api/graphql.client';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query = `
  query {
    character(id: "${id}") {
        id,
        name,
        status,
        species,
        type,
        gender,
        image,
        created
      }
    }
  `;

  const { character } = await graphQLClient.request<GetCharacterResponse>(
    query
  );

  return character;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
