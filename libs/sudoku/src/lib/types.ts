export interface SudokuGame {
  difficulty: SudokuDifficulty;
  score: number;
  solution: SudokuGrid;
  state: SudokuGrid;
  status: SudokuStatus;
}

export enum SudokuDifficulty {
  EASY = 0.5,
  MEDIUM = 0.65,
  HARD = 0.8,
}

export type SudokuGrid = number[][];

export enum SudokuStatus {
  CORRECT = '✅',
  INCORRECT = '❌',
  OVER = '🎉',
  EMPTY = '',
}
