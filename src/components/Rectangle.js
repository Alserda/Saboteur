import React from 'react';
import PropTypes from 'prop-types';

const Rectangle = ({ black, children }) => {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';

  return (
    <div
      className='Rectangle'
      style={{ backgroundColor: fill, color: stroke }}
    >
      {children}
    </div>
  );
};

Rectangle.propTypes = {
  black: PropTypes.bool,
  children: PropTypes.objectOf(PropTypes.any),
};

export default Rectangle;
