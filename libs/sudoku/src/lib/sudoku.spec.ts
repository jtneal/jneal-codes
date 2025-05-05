import { getSudokuGame } from './sudoku';

describe('sudoku', () => {
  it('should get sudoku game', () => {
    const game = getSudokuGame();

    expect(game).toHaveLength(9);
    expect(game[0]).toHaveLength(9);
    expect(game[1]).toHaveLength(9);
    expect(game[2]).toHaveLength(9);
    expect(game[3]).toHaveLength(9);
    expect(game[4]).toHaveLength(9);
    expect(game[5]).toHaveLength(9);
    expect(game[6]).toHaveLength(9);
    expect(game[7]).toHaveLength(9);
    expect(game[8]).toHaveLength(9);
  });
});
