import { goalCards, startCard } from 'constants/cards';

const randomBool = () => Math.random() >= 0.5;

export const defineGoldCard = () => (
  goalCards[Math.floor(Math.random() * goalCards.length)]
);

export const createGoalCards = (goalCardId, tilesOffset, tiles) => {
  let givenFirstRock = false;
  console.log('tiles offset:' , tilesOffset);

  const cards = goalCards.map((card, index) => {
    let img = '';

    /* eslint-disable global-require */
    if (goalCardId === card.id) {
      img = require('images/goalcard-gold.png');
    } else if (!givenFirstRock) {
      img = require('images/goalcard-rock-1.png');
      givenFirstRock = true;
    } else {
      img = require('images/goalcard-rock-2.png');
    }
    /* eslint-enable global-require */

    return (
      card.set('image', img)
      .set('rotated', randomBool())
      .set('x', tiles.x - tilesOffset)
      .set('y', tilesOffset + (index * 2) + 1)
    );
  });

  return cards;
};

export const createStardCard = (tilesOffset, tiles) => (
  startCard.set('x', tilesOffset).set('y', Math.round(tiles.y / 2) - 1)
);
