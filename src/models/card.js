import { Record as record } from 'immutable';

export const CardModel = record({
  x: null,
  y: null,
  id: null,
  type: '',
  image: null,
  rotated: false,
  path: null,
});

export default CardModel;
