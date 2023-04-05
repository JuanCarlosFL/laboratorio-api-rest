import axios from 'axios';

import { Character } from './character.api-model';
import { url } from 'common/constants';

export const getCharacter = async (id: string): Promise<Character> =>
  (await axios.get<Character>(`${url}/${id}`)).data;

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
