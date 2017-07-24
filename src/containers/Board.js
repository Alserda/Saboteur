import React from 'react';
import PropTypes from 'prop-types';

import { Card, Rectangle } from 'components';
// import { tiles } from 'constants/board';

import { CardModel } from 'models/card';

const Board = ({ cards, tiles, playCard }) => {
  const squares = [];

  const rectangleSize = {
    width: `${100 / tiles.x}%`,
    height: `${100 / tiles.y}%`,
  };

  function handleSquareClick(x, y) {
    playCard(x, y);
    console.log('handleSquareClick', x, y);
  }

  const renderRectangle = (i) => {
    const x = i % tiles.x;
    const y = Math.floor(i / tiles.x);
    const black = (x + y) % 2 === 1;

    const cardForPosition = cards.find(card => (
      card.x === x && card.y === y
    ));

    return (
      <div key={i} style={rectangleSize} onClick={() => handleSquareClick(x, y)}>
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
