/* Importing modules */
import React from 'react';
import { render } from 'react-dom';
import { Root } from 'containers';

if (module.hot) {
  module.hot.accept();
}

/* Constants */
const target = document.getElementById('app');

/* Rendering the application to the target */
render(
  <Root>hoi</Root>,
  target
);
