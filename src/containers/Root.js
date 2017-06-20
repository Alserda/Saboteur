import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { DevTools } from 'containers';
import sharedStyles from 'shared.less';

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
          <div>ddddeebfdababeeeefefdfaddfdf</div>
        </Provider>
        <DevTools store={store} />
      </div>
    );
  }
}
