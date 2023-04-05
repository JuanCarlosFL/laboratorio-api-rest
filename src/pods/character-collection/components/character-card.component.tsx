import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Gender, Status, Species } from 'common/enums';
import { BestSentencesComponent } from 'common/components';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="Character">
            {character.status === Status.ALIVE
              ? '😊'
              : character.status === Status.DEAD
              ? '💀'
              : '😒'}
          </Avatar>
        }
        title={character.name}
        subheader={character.status}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.center}
          >
            {character.species === Species.ALIEN
              ? '👽'
              : character.gender === Gender.MALE
              ? '👨'
              : '👩'}
          </Typography>
          <BestSentencesComponent bestSentences={character.bestSentences} />
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
