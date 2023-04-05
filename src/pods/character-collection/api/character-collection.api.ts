import axios from 'axios';

import { CharacterEntityItemApi } from './character-collection.api-model';
import { localUrl } from 'common/constants';

export const getCharacterCollection = async (): Promise<
  CharacterEntityItemApi[]
> => (await axios.get<CharacterEntityItemApi[]>(localUrl)).data;
