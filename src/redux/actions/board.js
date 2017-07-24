import Types from 'redux/types';

const { PLAY_CARD } = Types;

export const playCard = (x, y) => (dispatch, getState) => {
  console.log('play card, x, y: ', x, y);

  const card = getState().deck.remaining[0];
  const updatedCard = card.set('x', x).set('y', y);

  dispatch({
    type: PLAY_CARD,
    card: updatedCard,
  });
};
