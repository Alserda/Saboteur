import { tilesOffset } from 'constants/board';

import Types from 'redux/types';

const { NEW_GAME } = Types;

const initialState = {
  rules: {
    tilesOffset,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        rules: action.rules,
      };

    default: return state;
  }
};
