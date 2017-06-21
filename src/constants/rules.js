import { tilesOffset, tilesY } from 'constants/board';

export const startPosition = {
  x: tilesOffset + 1,
  y: tilesOffset + Math.round(tilesY / 2),
};
