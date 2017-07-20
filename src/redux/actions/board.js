import Types from 'redux/types';

const { PLAY_CARD } = Types;

export const playCard = ({ card }) => ({
  type: PLAY_CARD,
  card,
});
