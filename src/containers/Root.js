import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { DevTools } from 'containers';
import sharedStyles from 'shared.less';

import { Card, Rectangle } from 'components';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.objectOf(PropTypes.any)
  };

  render() {
    const { store } = this.props;
    console.log('Root props: ', this.props);

    return (
      <div className={sharedStyles.fullSize}>
        <Provider store={store}>
          <Rectangle black>
            <Card />
          </Rectangle>
        </Provider>
        <DevTools store={store} />
      </div>
    );
  }
}
