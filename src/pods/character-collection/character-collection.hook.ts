import * as React from 'react';

import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [pages, SetPages] = React.useState(0);

  const loadCharacterCollection = async (page: number, character: string) => {
    try {
      const result = await getCharacterCollection(page, character);
      SetPages(result.info.pages);
      setCharacterCollection(mapToCollection(result.results, mapFromApiToVm));
    } catch (error) {
      setCharacterCollection([]);
      throw Error(error);
    }
  };

  return { characterCollection, pages, loadCharacterCollection };
};
