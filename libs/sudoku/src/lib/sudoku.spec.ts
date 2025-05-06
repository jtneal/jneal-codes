import { createSudokuGame } from './sudoku';

describe('sudoku', () => {
  it('should create sudoku game', () => {
    const game = createSudokuGame();

    expect(game).toHaveLength(9);

    game.forEach((row) => {
      expect(row).toHaveLength(9);
      expect(row.includes(0)).toBe(false);
    });
  });
});
