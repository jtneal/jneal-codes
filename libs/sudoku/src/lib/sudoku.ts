import { isValid, start } from './logic';
import { shuffle } from './shuffle';
import { SudokuDifficultyEnum, SudokuDifficultyOption, SudokuGame, SudokuGrid, SudokuStatusEnum } from './types';

export function getDifficulties(): SudokuDifficultyOption[] {
  return [
    { value: SudokuDifficultyEnum.EASY, label: 'Easy' },
    { value: SudokuDifficultyEnum.MEDIUM, label: 'Medium' },
    { value: SudokuDifficultyEnum.HARD, label: 'Hard' },
  ];
}

export function startGame(difficulty = SudokuDifficultyEnum.EASY): SudokuGame {
  const game = createGame(difficulty);

  start(game);

  return game;
}

export function createGame(difficulty = SudokuDifficultyEnum.EASY): SudokuGame {
  const score = 0;
  const solution = Array.from({ length: 9 }, () => Array(9).fill(0));
  const startTime = new Date();
  const status = SudokuStatusEnum.EMPTY;

  findSolution(solution, 0, 0);

  const board = createBoard(JSON.parse(JSON.stringify(solution)), difficulty);

  return { board, difficulty, score, solution, startTime, status };
}

function findSolution(grid: SudokuGrid, row: number, col: number): boolean {
  if (row === 9) {
    return true;
  }

  const nextRow = col === 8 ? row + 1 : row;
  const nextCol = col === 8 ? 0 : col + 1;
  const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (const num of numbers) {
    if (isValid(grid, row, col, num)) {
      grid[row][col] = num;

      if (findSolution(grid, nextRow, nextCol)) {
        return true;
      }

      grid[row][col] = 0;
    }
  }

  return false;
}

function createBoard(solution: SudokuGrid, difficulty: SudokuDifficultyEnum): SudokuGrid {
  const cellsToHide = Math.floor(solution.flat().length * difficulty);
  let hiddenCells = 0;

  while (hiddenCells < cellsToHide) {
    const rowIndex = Math.floor(Math.random() * solution.length);
    const colIndex = Math.floor(Math.random() * solution[0].length);

    if (solution[rowIndex][colIndex] !== 0) {
      solution[rowIndex][colIndex] = 0;
      hiddenCells++;
    }
  }

  return solution;
}
