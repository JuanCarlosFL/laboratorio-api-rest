import axios from 'axios';

import { Character } from './character.api-model';
import { localUrl } from 'common/constants';

export const getCharacter = async (id: string): Promise<Character> =>
  (await axios.get<Character>(`${localUrl}/${id}`)).data;

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) await axios.put(`${localUrl}/${character.id}`, character);

  return true;
};
