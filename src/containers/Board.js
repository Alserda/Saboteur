import React from 'react';
import PropTypes from 'prop-types';

import { Rectangle } from 'components';
import { tiles } from 'constants/board';
import * as cardTypes from 'components/cards';

import { CardModel } from 'models/card';

const rectangleSize = {
  width: `${100 / tiles.x}%`,
  height: `${100 / tiles.y}%`,
};

const Board = ({ cards }) => {
  const squares = [];

  const renderRectangle = (i) => {
    const x = i % tiles.x;
    const y = Math.floor(i / tiles.x);
    const black = (x + y) % 2 === 1;

    let TileCard = null;
    const cardForPosition = cards.find(card => (
      card.x === x && card.y === y
    ));

    if (cardForPosition) {
      TileCard = cardTypes[cardForPosition.type];
    }

    return (
      <div key={i} style={rectangleSize}>
        <Rectangle black={black}>
          {TileCard && <TileCard />}
        </Rectangle>
      </div>
    );
  };

  for (let i = 0; i < (tiles.x * tiles.y); i += 1) {
    squares.push(renderRectangle(i));
  }

  return (
    <div className='Board'>
      {squares}
    </div>
  );
};


Board.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.instanceOf(CardModel)
  )
};

export default Board;
