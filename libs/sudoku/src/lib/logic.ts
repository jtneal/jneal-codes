import { SudokuGame, SudokuGrid } from './types';

let interval: NodeJS.Timer | null = null;

export function play(
  game: SudokuGame,
  row: number,
  col: number,
  num: number
): boolean {
  // If the game has not started yet, start it now
  if (!interval) {
    interval = setInterval(() => (game.score += 1), 1_000);
  }

  // If the user plays a number that is valid
  if (game.solution[row][col] === num) {
    game.state[row][col] = num;

    // If the game is over, stop the timer
    if (game.solution === game.state) {
      clearInterval(interval);
    }

    return true;
  }

  // The user played an invalid number so we increase the score by 10
  game.score += 10;

  return false;
}

export function isValid(
  game: SudokuGrid,
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

export function isInRow(game: SudokuGrid, row: number, num: number): boolean {
  return game[row].includes(num);
}

export function isInColumn(
  game: SudokuGrid,
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
  game: SudokuGrid,
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
