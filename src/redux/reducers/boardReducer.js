import { tilesX, tilesY } from 'constants/board';
import Types from 'redux/types';

const { NEW_GAME, PLAY_CARD } = Types;

const initialState = {
  cards: [],
  tiles: {
    x: tilesX,
    y: tilesY,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        cards: [...state.cards, action.startCard, ...action.endCards],
        tiles: action.tiles,
      };

    case PLAY_CARD:
      return {
        ...state,
        cards: [...state.cards, action.card],
      };

    default: return state;
  }
};

