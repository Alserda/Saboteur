import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Rectangle } from 'components';
import { tiles } from 'constants/board';
import { cards as availableCards } from 'constants/cards';
import * as cardTypes from 'components/cards';

const rectangleSize = {
  width: `${100 / tiles.x}%`,
  height: `${100 / tiles.y}%`,
};

const renderRectangle = (i) => {
  const x = i % tiles.x;
  const y = Math.floor(i / tiles.x);
  const black = (x + y) % 2 === 1;

  let TileCard = null;
  const cardForPosition = availableCards.find(card => (
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

const Board = () => {
  const squares = [];

  for (let i = 0; i < (tiles.x * tiles.y); i += 1) {
    squares.push(renderRectangle(i));
  }

  return (
    <div className='Board'>
      {squares}
    </div>
  );
};

export default Board;
