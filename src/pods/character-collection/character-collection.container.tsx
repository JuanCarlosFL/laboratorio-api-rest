import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection, pages } =
    useCharacterCollection();
  const history = useHistory();
  const [page, setPage] = React.useState(1);
  const [character, setCharacter] = React.useState('');

  React.useEffect(() => {
    loadCharacterCollection(page, character);
  }, [page, character]);

  const handleEdit = (id: number) => {
    history.push(linkRoutes.editCharacter(id));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onEdit={handleEdit}
      page={page}
      setPage={setPage}
      pages={pages}
      character={character}
      setCharacter={setCharacter}
    />
  );
};
