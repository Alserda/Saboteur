import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'components';
import sharedStyles from 'shared.less';

const Rectangle = ({ black, children }) => {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';
  return (
    <div
      className={sharedStyles.fullSize}
      style={{
        backgroundColor: fill,
        color: stroke,
        height: '100%',
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};

Rectangle.propTypes = {
  black: PropTypes.bool,
  children: PropTypes.instanceOf(
    PropTypes.oneOf([
      Card
    ])
  )
};

export default Rectangle;
