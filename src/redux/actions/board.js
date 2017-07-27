import Types from 'redux/types';
import {
  selectCardByPosition as cardPlaced,
  selectSurroundingCards,
  pathsMatch
} from 'utils/board';


const { PLAY_CARD } = Types;

export const playCard = (card, x, y) => ({
  type: PLAY_CARD,
  card: card.set('x', x).set('y', y),
});

export const canPlaceCard = (card, x, y) => (dispatch, getState) => {
  const state = getState();

  if (cardPlaced(x, y)(state)) return false;

  const surroundings = selectSurroundingCards(x, y)(state);
  console.log('surroundings: ', surroundings);

  return pathsMatch(card, surroundings);
};
