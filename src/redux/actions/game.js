import Types from 'redux/types';

import { tilesX, tilesY } from 'constants/board';
import { defineGoldCard, createGoalCards, createStardCard } from 'utils/cards';
import { drawFirstCards } from 'redux/actions/deck';

const { NEW_GAME } = Types;


export const init = (rules) => (dispatch) => {
  const { tilesOffset } = rules;

  const tiles = {
    x: tilesX + (tilesOffset * 2),
    y: tilesY + (tilesOffset * 2),
  };

  const startCard = createStardCard(tilesOffset, tiles);

  const goldCard = defineGoldCard();
  const endCards = createGoalCards(goldCard.id, tilesOffset, tiles);


  dispatch({
    type: NEW_GAME,
    rules,
    startCard,
    endCards,
    tiles,
  });
};


export const start = () => dispatch => {
  dispatch(drawFirstCards());
  console.log('start game');
};
