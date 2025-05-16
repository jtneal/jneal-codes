import { SudokuGame, SudokuGrid, SudokuStatusEnum } from './types';

let interval: NodeJS.Timer | null = null;

export function start(game: SudokuGame): void {
  if (!interval) {
    interval = setInterval(() => (game.score += 1), 1_000);
  }
}

export function end(game: SudokuGame): void {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }

  game.endTime = new Date();
  game.status = SudokuStatusEnum.OVER;
}

export function play(game: SudokuGame, row: number, col: number, num: number): boolean {
  const reset = () => {
    if (game.status !== SudokuStatusEnum.OVER) {
      game.status = SudokuStatusEnum.EMPTY;
    }
  };

  if (game.solution[row][col] === num) {
    game.board[row][col] = num;

    if (isGameOver(game)) {
      end(game);
    } else {
      game.status = SudokuStatusEnum.CORRECT;
      setTimeout(reset, 500);
    }

    return true;
  }

  game.score += 30;
  game.status = SudokuStatusEnum.INCORRECT;
  setTimeout(reset, 500);

  return false;
}

export function isGameOver(game: SudokuGame): boolean {
  return game.board.flat().every((cell) => cell > 0);
}

export function isValid(game: SudokuGrid, row: number, col: number, num: number): boolean {
  return (
    !isInRow(game, row, num) && !isInColumn(game, col, num) && !isInBlock(game, row - (row % 3), col - (col % 3), num)
  );
}

export function isInRow(game: SudokuGrid, row: number, num: number): boolean {
  return game[row].includes(num);
}

export function isInColumn(game: SudokuGrid, col: number, num: number): boolean {
  for (let row = 0; row < game.length; row++) {
    if (game[row][col] === num) {
      return true;
    }
  }

  return false;
}

export function isInBlock(game: SudokuGrid, startRow: number, startCol: number, num: number): boolean {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (game[startRow + row][startCol + col] === num) {
        return true;
      }
    }
  }

  return false;
}
