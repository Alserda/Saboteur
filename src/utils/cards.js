import { goalCards, startCard } from 'constants/cards';
import { PathModel, fullPath } from 'models/path';
import { randomBool } from 'utils';

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

