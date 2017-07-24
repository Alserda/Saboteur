import { Record as record } from 'immutable';

export const PathModel = record({
  blockade: false,
  top: false,
  right: false,
  bottom: false,
  left: false,
});

/* PathModel convenience helpers */
export const pathX = { left: true, right: true };
export const pathY = { top: true, bottom: true };
export const fullPath = { ...pathX, ...pathY };
export const pathHelper = { x: pathX, y: pathY, full: fullPath };

export const CardModel = record({
  x: null,
  y: null,
  id: null,
  type: '',
  image: null,
  rotated: false,
  path: null,
});
