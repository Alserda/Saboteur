import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { CardModel } from 'models/card';

const Card = ({ card }) => {
  const { type, image, rotated } = card;

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
        // borderRadius: '10px',
        [rotated && 'transform']: 'rotate(180deg)',
      }}
    />
  );
};

Card.propTypes = {
  card: PropTypes.instanceOf(CardModel),
};

export default Card;
