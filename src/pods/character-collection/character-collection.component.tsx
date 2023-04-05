import * as React from 'react';
import Pagination from '@material-ui/lab/Pagination';

import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { SearchComponent } from './components/search-component';

interface Props {
  characterCollection: CharacterEntityVm[];
  page: number;
  pages: number;
  setPage: (id: number) => void;
  character: string;
  setCharacter: (character: string) => void;
  onEdit: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    page,
    pages,
    setPage,
    onEdit,
    character,
    setCharacter,
  } = props;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      {characterCollection.length > 0 ? (
        <div className={classes.center}>
          <Pagination
            style={{ marginBottom: '1rem' }}
            count={pages}
            page={page}
            onChange={handleChange}
          />
          <SearchComponent
            setPage={setPage}
            character={character}
            setCharacter={setCharacter}
          />
          <ul className={classes.list}>
            {characterCollection.map((character) => (
              <li key={character.id}>
                <CharacterCard character={character} onEdit={onEdit} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
          }}
        >
          <h2>No hay datos para mostrar</h2>
        </div>
      )}
    </div>
  );
};
