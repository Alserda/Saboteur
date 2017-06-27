/**
 * This file contains all action types that can be used within the
 * reducers of this store.
 *
 * Separate arrays are created for actions that are related to
 * eachother to make it more readable and less cluttered.
 */

const game = [
  'START_GAME_REQUESTED',
  'START_GAME_SUCCESS',
  'START_GAME_FAILED',
];

const board = [
  'CARD_PLAYED',
];

/**
 * Make one large array of all types
 */
const availableTypes = [
  ...game,
  ...board,
];

/**
 * Map the array into one large object that contain all types.
 * @type {Object}
 */
const types = {};
availableTypes.map(type => (
  types[type] = type
));

export default types;
