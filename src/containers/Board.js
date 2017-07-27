import React from 'react';
import PropTypes from 'prop-types';

import { Card, Rectangle } from 'components';
// import { tiles } from 'constants/board';

import { CardModel } from 'models/card';

const Board = ({
  cards,
  deck,
  tiles,
  actions,
}) => {
  const squares = [];

  const rectangleSize = {
    width: `${100 / tiles.x}%`,
    height: `${100 / tiles.y}%`,
  };

  function handleSquareClick(x, y) {
    const card = deck.remaining[Math.floor(Math.random() * (deck.remaining.length - 1))];
    if (actions.canPlaceCard(card, x, y)) {
      actions.playCard(card, x, y);
    }
  }

  const renderRectangle = (i) => {
    const x = i % tiles.x;
    const y = Math.floor(i / tiles.x);
    const black = (x + y) % 2 === 1;

    const card = cards.find(entity => (
      entity.x === x && entity.y === y
    ));

    return (
      <div key={i} style={rectangleSize} onClick={() => handleSquareClick(x, y)}>
        <Rectangle black={black}>
          {card && <Card card={card} />}
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
  }),
  actions: PropTypes.shape({
    canPlaceCard: PropTypes.func,
    playCard: PropTypes.func,
  }),
};

export default Board;
