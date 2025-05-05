import { isValid } from './logic';
import { shuffle } from './shuffle';
import { SudokuGame } from './types';

export function getSudokuGame(): SudokuGame {
  return setupGame(Array.from({ length: 9 }, () => Array(9).fill(0)));
}

function setupGame(game: SudokuGame): SudokuGame {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let row = 0; row < game.length; row++) {
    for (let col = 0; col < game[row].length; col++) {
      const options = shuffle(numbers);

      for (const option of options) {
        if (isValid(game, row, col, option)) {
          game[row][col] = option;
        }
      }
    }
  }

  return game;
}
