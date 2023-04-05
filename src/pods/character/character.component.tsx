import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';

import { Character } from './character.vm';
import * as classes from './character.styles';
import { CharacterCard } from './components/character-card.component';

interface Props {
  character: Character;
  onSave: (character: Character, sentence: string) => void;
}
export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;
  const [sentence, setSentence] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSentence(event.target.value);
  };

  return (
    <div className={classes.container}>
      <Formik
        onSubmit={() => onSave(character, sentence)}
        initialValues={character}
        enableReinitialize={true}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent
              onChange={handleChange}
              value={sentence}
              name="sentence"
              label="Frase"
            />
            <Button type="submit" variant="contained" color="primary">
              Guardar nueva frase
            </Button>
          </Form>
        )}
      </Formik>
      <CharacterCard character={character} />
    </div>
  );
};
