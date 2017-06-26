import { tilesOffset, tilesY, tiles } from 'constants/board';
import { goalCards } from 'constants/cards';

export const startPosition = {
  x: tilesOffset,
  y: (tilesOffset + Math.round(tilesY / 2)) - 1,
};

export const goalPositions = () => {
  const positions = [];

  for (let i = 0; i < goalCards.length; i += 1) {
    positions.push({
      x: tiles.x - tilesOffset,
      y: tilesOffset + (i * 2) + 1,
      card: goalCards[i],
    });
  }

  return positions;
};
