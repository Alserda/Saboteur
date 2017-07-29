/* eslint-disable global-require */

import { cardTypes } from 'constants/cards';
import { CardModel } from 'models/card';
import { PathModel, pathHelper } from 'models/path';
import { randomBool } from 'utils';

/**
 * Extra information for later implementation.
 *
 * -------------------------------------------
 * /\/\/\/\/\/\/\ Dwarf cards /\/\/\/\/\/\/\/\
 * -------------------------------------------
 * There are seven miner-cards.
 * There are four saboteurs.
 *
 * -------------------------------------------
 * /\/\/\/\/\/\/\ Nugget cards /\/\/\/\/\/\/\/
 * -------------------------------------------
 * Sixteen cards with one nugget.
 * Eight cards with two nuggets.
 * Four cards with three nuggets.
 *
 * -------------------------------------------
 * /\/\/\/\/\/\/\ Action cards /\/\/\/\/\/\/\/
 * -------------------------------------------
 * Three cards to destroy a path.
 * Three cards to break a pickaxe.
 * Three cards to break a cart
 * Three cards to break a lamp.
 * Two cards to fix a pickaxe.
 * Two cards to fix a cart.
 * Two cards to fix a lamp.
 * One card to fix a pickaxe or cart.
 * One card to fix a lamp or pickaxe.
 * One card to fix a cart or lamp.
 * Six cards to spy on a goal card (officially three?)
 *
 */

/* eslint-disable key-spacing */

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
  X:  1,  //  Horizontal
  XT: 1,  //  Horizontal with top
  R:  1,  //  Right
  RB: 1,  //  Right and bottom
  B:  1,  //  Bottom
  BL: 1,  //  Bottom and left
  Y:  1,  //  Vertical
  YR: 1,  //  Vertical with right
  XY: 1,  //  All ways                officially 2?
};

/* My own deck seems to consist of 67 cards (path & action) */

/* eslint-enable key-spacing */

export const pathX = [...Array(pathAmounts.X)].map((v, i) => (
  new CardModel({
    id: `${cardTypes.path}-X-${i + 1}`,
    type: cardTypes.path,
    image: require('images/cards/path-x.png'),
    path: new PathModel(pathHelper.x),
    rotated: randomBool(),
  })
));

export const pathXT = [...Array(pathAmounts.XT)].map((v, i) => (
  new CardModel({
    id: `${cardTypes.path}-XT-${i + 1}`,
    type: cardTypes.path,
    image: require('images/cards/path-xt.png'),
    path: new PathModel({ ...pathHelper.x, top: true }),
    rotated: randomBool(),
  })
));

export const pathRB = [...Array(pathAmounts.RB)].map((v, i) => (
  new CardModel({
    id: `${cardTypes.path}-RB-${i + 1}`,
    type: cardTypes.path,
    image: require('images/cards/path-rb.png'),
    path: new PathModel({ right: true, bottom: true }),
    rotated: randomBool(),
  })
));

export const pathBL = [...Array(pathAmounts.BL)].map((v, i) => (
  new CardModel({
    id: `${cardTypes.path}-BL-${i + 1}`,
    type: cardTypes.path,
    image: require('images/cards/path-bl.png'),
    path: new PathModel({ bottom: true, left: true }),
    rotated: randomBool(),
  })
));

export const pathY = [...Array(pathAmounts.Y)].map((v, i) => (
  new CardModel({
    id: `${cardTypes.path}-Y-${i + 1}`,
    type: cardTypes.path,
    image: require('images/cards/path-y.png'),
    path: new PathModel(pathHelper.y),
    rotated: randomBool(),
  })
));

export const pathYL = [...Array(pathAmounts.YL)].map((v, i) => (
  new CardModel({
    id: `${cardTypes.path}-YL-${i + 1}`,
    type: cardTypes.path,
    image: require('images/cards/path-yl.png'),
    path: new PathModel({ ...pathHelper.y, left: true }),
    rotated: randomBool(),
  })
));


export const pathXY = [...Array(pathAmounts.XY)].map((v, i) => (
  new CardModel({
    id: `${cardTypes.path}-XY-${i + 1}`,
    type: cardTypes.path,
    image: require('images/cards/path-xy.png'),
    path: new PathModel(pathHelper.full),
    rotated: randomBool(),
  })
));


export const fullDeck = [
  ...pathXT,
  ...pathX,
  ...pathRB,
  ...pathBL,
  ...pathY,
  ...pathYL,
  ...pathXY,
];
