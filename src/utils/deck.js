import { createSelector } from 'reselect';

const getRemainingCards = state => state.deck.remaining;

export const fetchRandomCard = createSelector(
  [getRemainingCards], remainers => (
    remainers[Math.floor(Math.random() * remainers.length)]
  )
);
