import { SudokuGame } from './types';

export function isValid(
  game: SudokuGame,
  row: number,
  col: number,
  num: number
): boolean {
  return (
    !isInRow(game, row, num) &&
    !isInColumn(game, col, num) &&
    !isInBlock(game, row - (row % 3), col - (col % 3), num)
  );
}

export function isInRow(game: SudokuGame, row: number, num: number): boolean {
  return game[row].includes(num);
}

export function isInColumn(
  game: SudokuGame,
  col: number,
  num: number
): boolean {
  for (let row = 0; row < game.length; row++) {
    if (game[row][col] === num) {
      return true;
    }
  }

  return false;
}

export function isInBlock(
  game: SudokuGame,
  startRow: number,
  startCol: number,
  num: number
): boolean {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (game[startRow + row][startCol + col] === num) {
        return true;
      }
    }
  }

  return false;
}
