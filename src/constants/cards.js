/* eslint-disable global-require */

import { CardModel } from 'models/card';
import { startPosition } from 'constants/rules';
// export const startCards = 1;
// export const goalCards = 3;

// export const dungeonCards = 44;
// export const actionCards = 27;
// export const goldCards = 28;

// export const goldSeekers = 7;
// export const saboteurs = 4;

export const cardTypes = {
  start: 'Start',
  goal: 'Goal',
};

export const startCard = new CardModel(Object.assign({}, {
  id: 1,
  type: cardTypes.start,
  image: require('images/startcard.png'),
  ...startPosition,
}));

export const goalCards = [
  new CardModel(Object.assign({}, {
    id: 2,
    type: cardTypes.goal,
    image: require('images/goalcard-rock-1.png'),
  })),
  new CardModel(Object.assign({}, {
    id: 3,
    type: cardTypes.goal,
    image: require('images/goalcard-rock-2.png'),
  })),
  new CardModel(Object.assign({}, {
    id: 4,
    type: cardTypes.goal,
    image: require('images/goalcard-gold.png'),
  })),
];


export const cards = [
  startCard,
  goalCards,
];
