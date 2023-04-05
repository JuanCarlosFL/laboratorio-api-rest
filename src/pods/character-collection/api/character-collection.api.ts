import axios from 'axios';

import { CharacterEntityApi } from './character-collection.api-model';
import { url } from 'common/constants';

export const getCharacterCollection = async (
  page: number,
  name: string
): Promise<CharacterEntityApi> =>
  (await axios.get<CharacterEntityApi>(`${url}/?page=${page}&name=${name}`))
    .data;
