import { combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';

import game from './gameReducer';

export default enableBatching(
  combineReducers({
    game,
  })
);
