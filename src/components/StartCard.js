import React from 'react';

import { startCard } from 'constants/cards';
import sharedStyles from 'shared.less';

const StartCard = () => (
  <div
    className={sharedStyles.fullSize}
    style={{
      backgroundImage: `url(${startCard.image})`,
      backgroundSize: 'cover',
    }}
  />
);

export default StartCard;
