/* eslint-disable global-require */

import { CardModel } from 'models/card';

const goalCardsAmount = 3;

/**
 * Defines all the possible types of cards.
 */
export const cardTypes = {
  start: 'Start',
  goal: 'Goal',
  path: 'Path',
  action: 'Action',
  nugget: 'Nugget',
};


/**
 * Constructs the starting card where players should start
 * building from. The startposition is currently using the static
 * rules. This might be dynamic based on the player's dynamic rules.
 *
 * @return  CardModel  A CardModel instance representing the start card.
 */
export const startCard = new CardModel(Object.assign({}, {
  id: cardTypes.start,
  type: cardTypes.start,
  image: require('images/cards/startcard.png'),
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
    id: `${cardTypes.goal}-${i + 1}`,
    type: cardTypes.goal,
  })
));


export const cards = [
  startCard,
  goalCards,
];
