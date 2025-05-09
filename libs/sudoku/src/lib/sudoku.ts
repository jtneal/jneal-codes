import { isValid } from './logic';
import { shuffle } from './shuffle';
import { SudokuDifficulty, SudokuDifficultyOption, SudokuGame, SudokuGrid, SudokuStatus } from './types';

export function getDifficulties(): SudokuDifficultyOption[] {
  return [
    { value: SudokuDifficulty.EASY, label: 'Easy' },
    { value: SudokuDifficulty.MEDIUM, label: 'Medium' },
    { value: SudokuDifficulty.HARD, label: 'Hard' },
  ];
}

export function getSudokuSolution(): SudokuGrid {
  const solution = Array.from({ length: 9 }, () => Array(9).fill(0));

  findSolution(solution, 0, 0);

  return solution;
}

export function createSudokuGame(difficulty = SudokuDifficulty.EASY): SudokuGame {
  const score = 0;
  const solution = getSudokuSolution();
  const state = createState(JSON.parse(JSON.stringify(solution)), difficulty);
  const status = SudokuStatus.EMPTY;

  return { difficulty, score, solution, state, status };
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

function createState(solution: SudokuGrid, difficulty: SudokuDifficulty): SudokuGrid {
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
