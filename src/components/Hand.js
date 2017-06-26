import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'components/cards';
import { CardModel } from 'models/card';

const Hand = ({ cards }) => {
  console.log('cards: ', cards);
  const cardList = cards.map((card, index) => (
    <Card key={index} card={card} />
  ));

  return (
    <div className='Hand'>
      {cardList}
    </div>
  );
};


Hand.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(CardModel)).isRequired,
};

export default Hand;
