/* Importing modules */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import configureStore from 'redux/configureStore';

import { Root } from 'containers';

if (module.hot) {
  module.hot.accept();
}

/* Constants */
const target = document.getElementById('app');
const store = configureStore();

/* Rendering the application to the target */
render(
  <Provider store={store}>
    <Root>hoi</Root>
  </Provider>,
  target
);
