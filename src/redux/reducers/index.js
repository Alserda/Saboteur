import { combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';

import board from './boardReducer';
import game from './gameReducer';
import rules from './rulesReducer';

export default enableBatching(
  combineReducers({
    board,
    game,
    rules,
  })
);
