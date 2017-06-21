import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Rectangle, StartCard } from 'components';
import { tiles } from 'constants/board';
import { CardModel } from 'models/card';

const rectangleSize = {
  width: `${100 / tiles.x}%`,
  height: `${100 / tiles.y}%`,
};

export default class Board extends Component {
  static propTypes = {
    cardPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired,
    goalPositions: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
        card: PropTypes.instanceOf(CardModel),
      })
    ),
  };

  renderRectangle(i) {
    const x = i % tiles.x;
    const y = Math.floor(i / tiles.x);
    const black = (x + y) % 2 === 1;

    const [cardX, cardY] = this.props.cardPosition;
    const fragment = (x === cardX && y === cardY) ?
      <StartCard /> :
      null;

    return (
      <div key={i} style={rectangleSize}>
        <Rectangle black={black}>
          {fragment}
        </Rectangle>
      </div>
    );
  }

  render() {
    console.log('Props: ', this.props.goalPositions);
    const squares = [];
    const styling = {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap'
    };

    for (let i = 0; i < (tiles.x * tiles.y); i += 1) {
      squares.push(this.renderRectangle(i));
    }

    return (
      <div style={styling}>
        {squares}
      </div>
    );
  }
}
