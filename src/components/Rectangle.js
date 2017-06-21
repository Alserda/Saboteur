import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'components';
import sharedStyles from 'shared.less';

const Rectangle = ({ children }) => (
  <div className={sharedStyles.fullSize} style={{ backgroundColor: 'red' }}>
    {children}
  </div>
);

Rectangle.propTypes = {
  children: PropTypes.instanceOf(
    PropTypes.oneOf([
      Card
    ])
  )
};

export default Rectangle;
