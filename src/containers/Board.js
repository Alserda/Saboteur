import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Rectangle, Card } from 'components';
import sharedStyles from 'shared.less';

export default class Board extends Component {
  static propTypes = {
    cardPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };

  renderRectangle(x, y) {
    const black = (x + y) % 2 === 1;

    const [cardX, cardY] = this.props.cardPosition;

    const fragment = (x === cardX && y === cardY) ?
      <Card /> :
      null;

    return (
      <Rectangle black={black}>
        {fragment}
      </Rectangle>
    );
  }

  render() {
    return (
      <div className={sharedStyles.fullSize}>
        {this.renderRectangle(0, 0)}
        {this.renderRectangle(1, 0)}
        {this.renderRectangle(2, 0)}
      </div>
    );
  }
}
