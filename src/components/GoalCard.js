import React from 'react';

import { goalCard } from 'constants/cards';
import sharedStyles from 'shared.less';

const GoalCard = () => (
  <div
    className={sharedStyles.fullSize}
    style={{
      backgroundImage: `url(${goalCard.image})`,
      backgroundSize: 'cover',
    }}
  />
);

export default GoalCard;
