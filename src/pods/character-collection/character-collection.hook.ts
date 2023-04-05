import * as React from 'react';

import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = async () => {
    try {
      const result = await getCharacterCollection();
      setCharacterCollection(mapToCollection(result, mapFromApiToVm));
    } catch (error) {
      setCharacterCollection([]);
      throw Error(error);
    }
  };

  return { characterCollection, loadCharacterCollection };
};
