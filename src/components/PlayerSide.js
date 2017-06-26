import React from 'react';
import PropTypes from 'prop-types';

const PlayerSide = ({ children }) => (
  <div className='PlayerSide'>
    {children}
  </div>
);

PlayerSide.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlayerSide;
