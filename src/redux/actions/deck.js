import Types from 'redux/types';
import { fetchRandomCard } from 'utils/deck';

const { DRAW_CARD } = Types;

export const drawCard = () => (dispatch, getState) => dispatch({
  card: fetchRandomCard(getState()),
  type: DRAW_CARD,
});

export const drawFirstCards = () => (dispatch, getState) => {
  const { startingCards } = getState().game.rules;

  for (let i = 0; i < startingCards; i += 1) {
    dispatch(drawCard());
  }
};
