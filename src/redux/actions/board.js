import Types from 'redux/types';
import { createSelector } from 'reselect';

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

const getBoardCards = state => state.board.cards;

// const selectSurroundingCards = (x, y) => createSelector(
//   [getBoardCards], cards => {
//     /* eslint-disable no-multi-spaces */
//     const left   = x - 1;
//     const right  = x + 1;
//     const top    = y - 1;
//     const bottom = y + 1;
//     /* eslint-enable no-multi-spaces */

//     return cards.filter(card => (
//      card.x === (left || right) || card.y === (top || bottom)
//     ));
//   }
// );

const selectSurroundingCards = (x, y) => createSelector(
  [getBoardCards], cards => ({
    /* eslint-disable key-spacing */
    top:    cards.filter(card => card.y === (y - 1))[0],
    right:  cards.filter(card => card.x === (x + 1))[0],
    bottom: cards.filter(card => card.y === (y + 1))[0],
    left:   cards.filter(card => card.x === (x - 1))[0],
    /* eslint-enable key-spacing */
  })
);


export const canPlaceCard = ({ card, x, y }) => (dispatch, getState) => {
  const surrounding = selectSurroundingCards(x, y)(getState());
  console.log('Surrounding cards: ', surrounding);
};
