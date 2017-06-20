import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DevTools } from 'containers';

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
        <DevTools />
      </div>
    );
  }
}
