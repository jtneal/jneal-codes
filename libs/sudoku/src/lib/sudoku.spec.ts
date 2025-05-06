import { createSudokuGame } from './sudoku';

describe('sudoku', () => {
  it('should create sudoku game', () => {
    const game = createSudokuGame();
    const grid = game.solution;

    expect(grid).toHaveLength(9);

    grid.forEach((row) => {
      expect(row).toHaveLength(9);
      console.log(row);
      expect(row.includes(0)).toBe(false);
    });
  });
});
