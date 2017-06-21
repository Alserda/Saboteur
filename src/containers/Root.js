import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { Board, DevTools } from 'containers';
import sharedStyles from 'shared.less';

import { goalPositions, startPosition } from 'constants/rules';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.objectOf(PropTypes.any)
  };

  render() {
    const { store } = this.props;

    console.log('Start position: ', startPosition);

    return (
      <div className={sharedStyles.fullSize}>
        <Provider store={store}>
          <Board
            cardPosition={[startPosition.x - 1, startPosition.y - 1]}
            goalPositions={goalPositions()}
          />
        </Provider>
        <DevTools store={store} />
      </div>
    );
  }
}
