import Types from 'redux/types';

const {
  START_GAME_REQUESTED,
  // START_GAME_SUCCESS,
  // START_GAME_FAILED,
} = Types;

const initialState = {
  identifier: '',
};

export default (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case START_GAME_REQUESTED:
      return {
        ...state,
        identifier: action.identifier,
      };

    default: return state;
  }
};
