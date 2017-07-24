/* eslint-disable global-require */

import { cardTypes } from 'constants/cards';
import { CardModel } from 'models/card';

// export const dungeonCards = 44;
// export const actionCards = 27;
// export const goldCards = 28;
//

// export const goldSeekers = 7;
// export const saboteurs = 4;

/**
 * Terminology for cards.
 * - X means the dungeon goes from left to right.
 * - Y means the dungeon goes from top to bottom.
 * - B means bottom
 * - R means right
 * - L means left
 * - T means top.
 *
 * This means that a card with 'RB' will be a card
 * that has a dungeon-entry at the right and bottom side.
 *
 * Be aware that these cards can be rotated by 180 degrees.
 */

/**
 * Amounts of dungeon cards that are generated.
 * @type {Object}
 */
const path = {
  X: 5,
  XB: 5,
  RB: 5,
  LB: 5,
  Y: 5,
  YL: 5,
  XY: 5,
};

const pathBlockade = {
  RB: 1,
  LB: 1,
  Y: 1,
  R: 1,
  T: 1,
  YR: 1,
  XY: 2,
  X: 1,
  XT: 1,
};

export const pathX = [...Array(path.X)].map((v, i) => (
  new CardModel({
    id: `${cardTypes.path}-${i + 1}`,
    type: cardTypes.path,
    image: require('images/cards/path-x.png'),
  })
));

export const fullDeck = [
  ...pathX,
];
