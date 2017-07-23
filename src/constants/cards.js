/* eslint-disable global-require */

import { CardModel } from 'models/card';
import { startPosition } from 'constants/rules';
// export const startCards = 1;
// export const goalCards = 3;
const goalCardsAmount = 3;
// export const dungeonCards = 44;
// export const actionCards = 27;
// export const goldCards = 28;

// export const goldSeekers = 7;
// export const saboteurs = 4;

export const cardTypes = {
  start: 'Start',
  goal: 'Goal',
};

/**
 * Constructs the starting card where players should start
 * building from. The startposition is currently using the static
 * rules. This might be dynamic based on the player's dynamic rules.
 *
 * @type  CardModel  A CardModel instance representing the start card.
 */
export const startCard = new CardModel(Object.assign({}, {
  id: 1,
  type: cardTypes.start,
  image: require('images/startcard.png'),
}));

/**
 * Constructs the most basic form of the goal cards, by just setting the
 * id and the type of the card. The returned cards should be used to
 * set up the game, by choosing the gold-card and shuffle-rotating.
 * The images are dependant on whether it's a gold card or not.
 *
 * @return  [CardModel]  An array of CardModels representing goal cards.
 */
export const goalCards = [...Array(goalCardsAmount)].map((v, i) => (
  new CardModel({
    id: i + 2,
    type: cardTypes.goal,
  })
));


export const cards = [
  startCard,
  goalCards,
];
