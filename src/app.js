/* Importing modules */
import React from 'react';
import { render } from 'react-dom';

import configureStore from 'redux/configureStore';

import { Root } from 'containers';

import 'less/style.less';

if (module.hot) {
  module.hot.accept();
}

/* Constants */
const target = document.getElementById('app');
const store = configureStore();

/* Rendering the application to the target */
render(<Root store={store} />, target);
