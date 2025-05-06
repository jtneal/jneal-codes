import { isValid } from './logic';
import { shuffle } from './shuffle';
import { SudokuGame } from './types';

export function createSudokuGame(): SudokuGame {
  const game = Array.from({ length: 9 }, () => Array(9).fill(0));

  findSolution(game, 0, 0);

  return game;
}

function findSolution(game: SudokuGame, row: number, col: number): boolean {
  if (row === 9) {
    return true;
  }

  const nextRow = col === 8 ? row + 1 : row;
  const nextCol = col === 8 ? 0 : col + 1;
  const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (const num of numbers) {
    if (isValid(game, row, col, num)) {
      game[row][col] = num;

      if (findSolution(game, nextRow, nextCol)) {
        return true;
      }

      game[row][col] = 0;
    }
  }

  return false;
}
