import { tilesOffset } from 'constants/board';
import Types from 'redux/types';

const { NEW_GAME } = Types;

const initialState = {
  tilesOffset,
};

export default (state = initialState, action) => {
  if (action.type !== NEW_GAME) return state;

  return {
    ...state,
    ...action.rules,
  };
};
