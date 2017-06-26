import React from 'react';
import PropTypes from 'prop-types';

import sharedStyles from 'shared.less';
import { CardModel } from 'models/card';

const Card = ({ card }) => {
  const { image } = card;

  return (
    <div
      className={sharedStyles.fullSize}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
      }}
    />
  );
};

Card.propTypes = {
  card: PropTypes.instanceOf(CardModel),
};

export default Card;
