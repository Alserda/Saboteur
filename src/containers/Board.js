import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Rectangle, Card } from 'components';
import { tilesX, tilesY } from 'constants/board';

const rectangleSize = {
  width: `${100 / tilesX}%`,
  height: `${100 / tilesY}%`,
};

export default class Board extends Component {
  static propTypes = {
    cardPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };

  renderRectangle(i) {
    const x = i % tilesX;
    const y = Math.floor(i / tilesX);
    const black = (x + y) % 2 === 1;

    const [cardX, cardY] = this.props.cardPosition;
    const fragment = (x === cardX && y === cardY) ?
      <Card /> :
      null;

    return (
      <div key={i} style={rectangleSize}>
        <Rectangle black={black}>
          {i + 1}{fragment}
        </Rectangle>
      </div>
    );
  }

  render() {
    const squares = [];
    const styling = {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap'
    };

    for (let i = 0; i < (tilesX * tilesY); i += 1) {
      squares.push(this.renderRectangle(i));
    }

    return (
      <div style={styling}>
        {squares}
      </div>
    );
  }
}
