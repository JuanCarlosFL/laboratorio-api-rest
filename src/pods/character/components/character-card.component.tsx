import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

import { Gender, Status, Species } from 'common/enums';
import { Character } from '../character.vm';
import * as classes from './character-card.styles';
import { BestSentencesComponent } from 'common/components';

interface Props {
  character: Character;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const history = useHistory();

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
        <IconButton onClick={() => history.push('/characters')}>
          <SkipPreviousIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
