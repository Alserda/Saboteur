import React from 'react';

import { Hand } from 'components';

import { goalCards } from 'constants/cards'; /* Debugging */

const Player = () => (
  <div className='Player'>
    <Hand cards={goalCards} />
  </div>
);

export default Player;
