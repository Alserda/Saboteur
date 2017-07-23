import React from 'react';
import PropTypes from 'prop-types';

import { Rectangle } from 'components';
import { Card } from 'components/cards';
// import { tiles } from 'constants/board';

import { CardModel } from 'models/card';

const Board = ({ cards, tiles }) => {
  console.log('cards: ', cards);
  console.log('tile sprops: ', tiles);
  const squares = [];

  const rectangleSize = {
    width: `${100 / tiles.x}%`,
    height: `${100 / tiles.y}%`,
  };

  const renderRectangle = (i) => {
    const x = i % tiles.x;
    const y = Math.floor(i / tiles.x);
    const black = (x + y) % 2 === 1;

    const cardForPosition = cards.find(card => (
      card.x === x && card.y === y
    ));

    return (
      <div key={i} style={rectangleSize}>
        <Rectangle black={black}>
          {cardForPosition && <Card card={cardForPosition} />}
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
  ),
  tiles: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  })
};

export default Board;
