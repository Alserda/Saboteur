import { tilesX, tilesY } from 'constants/board';

import Types from 'redux/types';

const { NEW_GAME } = Types;

const initialState = {
  cards: [],
  tiles: {
    x: tilesX,
    y: tilesY,
  },
};

export default (state = initialState, action) => {
  if (action.type !== NEW_GAME) return state;

  return {
    ...state,
    cards: [...state.cards, action.startCard, ...action.endCards],
    tiles: action.tiles,
  };
};

