import { createSelector } from 'reselect';
import { opposites } from 'constants/paths';

const getBoardCards = state => state.board.cards;

export const selectSurroundingCards = (x, y) => createSelector(
  [getBoardCards], cards => ({
    /* eslint-disable key-spacing */
    top:    cards.filter(card => card.y === (y - 1) && card.x === x)[0],
    bottom: cards.filter(card => card.y === (y + 1) && card.x === x)[0],
    left:   cards.filter(card => card.x === (x - 1) && card.y === y)[0],
    right:  cards.filter(card => card.x === (x + 1) && card.y === y)[0],
    /* eslint-enable key-spacing */
  })
);

export const selectCardByPosition = (x, y) => createSelector(
  [getBoardCards], cards => cards.filter(card => (
    card.x === x && card.y === y
  ))[0]
);


/**
 * Checks whether a card that is attempted to be placed on the board
 * actually fits with the card(s) that are already on the board.
 * @param   CardModel  boardCard  The card which is placed on the board
 * @param   CardModel  queryCard  The card that is attempted to be placed
 * @param   String     direction  The direction of the boardCard based on the queryCard.
 * @return  Object                Results of whether it fits from either side.
 */
const cardFits = (boardCard, queryCard, direction) => ({
  boardCardFits: boardCard.path[boardCard.rotated ? direction : opposites[direction]],
  queryCardFits: queryCard.path[queryCard.rotated ? opposites[direction] : direction],
});


/**
 * Checks if a card can be placed on the board, by validating
 * whether the card's path matches the cards that are surrounding it.
 * @param  {[type]} card         [description]
 * @param  {[type]} surroundings [description]
 * @return {[type]}              [description]
 */
export const pathsMatch = (card, surroundings) => {
  const amount = Object.keys(surroundings).filter(k => surroundings[k]);
  if (!amount.length) return false;

  const pass = Object.keys(surroundings).map(direction => {
    /**
     * If there's a card in this direction, check if the cards
     * match according to the board and card.
     *
     * Only pass the test when the paths match or when they
     * don't have a path towards eachother.
     */
    if (surroundings[direction]) {
      const { boardCardFits, queryCardFits } = cardFits(surroundings[direction], card, direction);

      /* If the board- and requested card both don't have a path towards.. */
      /* ..eachother, and this is the only surrounding card, don't allow it. */
      if (!boardCardFits && !queryCardFits && amount.length === 1) return false;

      return boardCardFits === queryCardFits;
    }

    return true;
  });

  return pass.filter(bool => bool).length === pass.length;
};
