import { isInBlock, isInColumn, isInRow, isValid } from './logic';
import { SudokuGame } from './types';

describe('logic', () => {
  let game: SudokuGame;

  beforeEach(() => {
    game = [
      [3, 1, 5, 8, 2, 7, 9, 4, 6],
      [4, 6, 8, 9, 1, 5, 7, 3, 2],
      [7, 2, 9, 3, 4, 6, 5, 1, 8],
      [9, 4, 6, 5, 3, 8, 1, 2, 7],
      [5, 7, 1, 6, 9, 2, 4, 8, 3],
      [8, 3, 2, 1, 7, 4, 6, 9, 5],
      [6, 9, 3, 2, 5, 1, 8, 7, 4],
      [2, 5, 7, 4, 8, 9, 3, 6, 1],
      [1, 8, 4, 7, 6, 3, 2, 5, 9],
    ];
  });

  it('should validate all', () => {
    const newGame = [ ...game ];

    newGame[0][0] = 0;

    expect(isValid(newGame, 0, 0, 3)).toBe(true);
    expect(isValid(newGame, 0, 0, 4)).toBe(false);
  });

  it('should validate row', () => {
    expect(isInRow(game, 0, 0)).toBe(false);
    expect(isInRow(game, 0, 1)).toBe(true);
  });

  it('should validate column', () => {
    expect(isInColumn(game, 0, 0)).toBe(false);
    expect(isInColumn(game, 0, 1)).toBe(true);
  });

  it('should validate block', () => {
    expect(isInBlock(game, 0, 0, 0)).toBe(false);
    expect(isInBlock(game, 0, 0, 1)).toBe(true);
  });
});
