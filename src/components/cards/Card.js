import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { CardModel } from 'models/card';

const Card = ({ card }) => {
  console.log('card: ', card)
  const { type, image } = card;

  const styles = classnames({
    Card: true,
    [type]: type,
  });

  return (
    <div
      className={styles}
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
