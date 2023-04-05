import React from 'react';

import { Character } from './character.vm';
import * as classes from './character.styles';
import { CharacterCard } from './components/character-card.component';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}
export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <div className={classes.container}>
      <CharacterCard character={character} />
    </div>
  );
};
