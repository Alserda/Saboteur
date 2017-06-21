/* eslint-disable global-require */

import { CardModel } from 'models/card';
// export const startCards = 1;
// export const goalCards = 3;

// export const dungeonCards = 44;
// export const actionCards = 27;
// export const goldCards = 28;

// export const goldSeekers = 7;
// export const saboteurs = 4;

export const cardTypes = {
  start: 'start',
  goal: 'goal',
};

export const startCard = new CardModel(Object.assign({}, {
  type: cardTypes.start,
  image: require('images/startcard.png'),
}));

