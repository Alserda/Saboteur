/* eslint-disable global-require */

import { cardTypes } from 'constants/cards';
import { CardModel, PathModel, pathHelper } from 'models/card';

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



/* Mijn deck */

/* Goud kaarten, 28 kaarten, compleet */
/* 16 met 1 goudklomp */
/* 8 met 2 goudklompen */
/* 4 met 3 goudklompen */

/* Dwerg kaarten, 11 kaarten, compleet */
/* 7 miners */
/* 4 saboteurs */

/* Padkaarten */
/* Links naar rechts, 3 kaarten, zouden 5 moeten zijn */

/* Links naar rechts met boven, 5 */

/* Beneden en rechts, 4, zouden 5 moeten zijn*/
/* Beneden en links, 5 */

/* Boven naar beneden, 4, zouden 5 moeten zijn */

/* Boven naar beneden met links, 5 */

/* X en Y, 5 */


/* Blokkades */
// Beneden en links, 1
// Beneden en rechts, 1
// Beneden en boven, 1
// Rechts, 1
// Onder, 1
// Boven, Rechts, onder, 1
// X en Y, 1, zouden 2 moeten zijn
// Links en rechts, 1
// Boven, links, rechts, 1
//

/* Actiekaarten */

/* Pad weghalen, 3 */
// Fix pick + kart, 1
// Fix pick + lamp, 1
// Fix lamp + kart, 1
// Break pick, 3
// Fix pick, 2
// Break kart, 3
// Fix kart, 2,
// Break lamp, 3
// Fix lamp, 2
// Search gold, 6, ipv 3


// 67 ipv 69
/* eslint-disable key-spacing */
const pathAmounts = {
  X:  3,  //  Horizontal              officially 5?
  XT: 5,  //  Horizontal with top
  RB: 4,  //  Right and bottom        officially 5?
  BL: 5,  //  Bottom and left
  Y:  4,  //  Vertical                officially 5?
  YL: 5,  //  Vertical with left
  XY: 5,  //  All ways
};

const blockadeAmounts = {
  X:  1,  // Horizontal
  XT: 1,  // Horizontal with top
  R:  1,  // Right
  RB: 1,  // Right and bottom
  B:  1,  // Bottom
  BL: 1,  // Bottom and left
  Y:  1,  // Vertical
  YR: 1,  // Vertical with right
  XY: 1,  // All ways                 officially 2?
};

/* eslint-enable key-spacing */

export const pathX = [...Array(pathAmounts.X)].map((v, i) => (
  new CardModel({
    id: `${cardTypes.path}-${i + 1}`,
    type: cardTypes.path,
    image: require('images/cards/path-x.png'),
    path: new PathModel(pathHelper.x),
  })
));

export const fullDeck = [
  ...pathX,
];
