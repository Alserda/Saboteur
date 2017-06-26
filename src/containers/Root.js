import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { Game, DevTools } from 'containers';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.objectOf(PropTypes.any)
  };

  render() {
    const { store } = this.props;

    return (
      <div className='Root'>
        <Provider store={store}>
          <Game />
        </Provider>
        <DevTools store={store} />
      </div>
    );
  }
}
