import React from 'react';

import * as classes from './best-sentences.styles';

interface Props {
  bestSentences: string[];
}

export const BestSentencesComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { bestSentences } = props;

  return (
    <div>
      {bestSentences?.length > 0 ? (
        <div className={classes.center}>
          <h4>Mejores frases</h4>
          <ul>
            {bestSentences.map((i) => (
              <li>{i}</li>
            ))}
          </ul>
        </div>
      ) : (
        <h4 className={classes.center}>No hay frases favoritas</h4>
      )}
    </div>
  );
};
