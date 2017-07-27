import { createSelector } from 'reselect';

import { goalCards, startCard } from 'constants/cards';
import { PathModel, fullPath } from 'models/path';

const randomBool = () => Math.random() >= 0.5;

export const defineGoldCard = () => (
  goalCards[Math.floor(Math.random() * goalCards.length)]
);

export const createGoalCards = (goalCardId, tilesOffset, tiles) => {
  let givenFirstRock = false;

  const cards = goalCards.map((card, index) => {
    let img = '';
    let path = null;

    /* eslint-disable global-require */
    if (goalCardId === card.id) {
      img = require('images/cards/goalcard-gold.png');
      path = new PathModel(fullPath);
    } else if (!givenFirstRock) {
      img = require('images/cards/goalcard-rock-1.png');
      path = new PathModel({ right: true, bottom: true });
      givenFirstRock = true;
    } else {
      img = require('images/cards/goalcard-rock-2.png');
      path = new PathModel({ bottom: true, left: true });
    }
    /* eslint-enable global-require */

    return (
      card.set('image', img)
      .set('path', path)
      .set('rotated', randomBool())
      .set('x', tiles.x - 1 - tilesOffset)
      .set('y', tilesOffset + (index * 2))
    );
  });

  return cards;
};

export const createStardCard = (tilesOffset, tiles) => (
  startCard.set('x', tilesOffset)
  .set('y', Math.round(tiles.y / 2) - 1)
  .set('path', new PathModel(fullPath))
);


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
 * Checks whether the paths of a card can fit
 * its surroundings.
 *
 * @param   CardModel  card          Card to place
 * @param   Object     surroundings
 * @return {[type]}              [description]
 */
export const pathsMatch = (card, surroundings) => {
  /* If there are no surrounding cards.. */
  if (!Object.keys(surroundings).some(k => surroundings[k])) {
    return false;
  }

  /* Should improve this, should also check rotation */

  const { top, bottom, left, right } = surroundings;

  if (top && top.path.bottom && card.path.top) {
    return true;
  }

  if (left && left.path.right && card.path.left) {
    return true;
  }

  if (right && right.path.left && card.path.right) {
    return true;
  }

  if (bottom && bottom.path.top && card.path.bottom) {
    return true;
  }

  return false;
};
