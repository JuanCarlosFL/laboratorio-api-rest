import axios from 'axios';

import {
  CharacterEntityApi,
  CharacterEntityItemApi,
} from './character-collection.api-model';
import { url } from 'common/constants';

export const getCharacterCollection = async (): Promise<
  CharacterEntityItemApi[]
> => (await axios.get<CharacterEntityApi>(url)).data.results;
