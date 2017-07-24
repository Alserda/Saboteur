import { fullDeck } from 'constants/deck';

// import Types from 'redux/types';

// const { NEW_GAME } = Types;

const initialState = {
  remaining: fullDeck,
  exhausted: [],
};

// export default (state = initialState, action) => {
//   return state;
// };

export default (state = initialState) => state;
