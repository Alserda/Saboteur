import React from 'react';

import { Board } from 'containers';
import { Player, PlayerSide } from 'components';


const Game = () => (
  <div className='Game'>
    <Board />
    <PlayerSide>
      <Player />
    </PlayerSide>
  </div>
);

export default Game;
