import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { Board, DevTools } from 'containers';
import sharedStyles from 'shared.less';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.objectOf(PropTypes.any)
  };

  render() {
    const { store } = this.props;

    return (
      <div className={sharedStyles.fullSize}>
        <Provider store={store}>
          <Board />
        </Provider>
        <DevTools store={store} />
      </div>
    );
  }
}
