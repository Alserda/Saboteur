import { combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';

import board from './boardReducer';
import deck from './deckReducer';
import game from './gameReducer';

export default enableBatching(
  combineReducers({
    board,
    deck,
    game,
  })
);
