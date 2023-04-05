import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

interface Props {
  character: string;
  setCharacter: (character: string) => void;
  setPage: (page: number) => void;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '1rem',
  },
});

export const SearchComponent: React.FC<Props> = (props) => {
  const { character, setCharacter: setCompany, setPage } = props;
  const [newCharacter, setNewCharacter] = React.useState(character);

  const classes = useStyles();

  const handleClick = () => {
    setPage(0);
    setCompany(newCharacter);
  };

  return (
    <div className={classes.root}>
      <TextField
        label="A quién buscamos"
        value={newCharacter}
        onChange={(e) => setNewCharacter(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Buscar
      </Button>
    </div>
  );
};
