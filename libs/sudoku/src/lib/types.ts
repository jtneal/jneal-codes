export interface SudokuGame {
  difficulty: SudokuDifficulty;
  score: number;
  solution: SudokuGrid;
  state: SudokuGrid;
  status: SudokuStatus;
}

export enum SudokuDifficulty {
  EASY = 0.5,
  MEDIUM = 0.625,
  HARD = 0.75,
}

export interface SudokuDifficultyOption {
  label: string;
  value: SudokuDifficulty;
}

export type SudokuGrid = number[][];

export enum SudokuStatus {
  CORRECT = '✅',
  INCORRECT = '❌',
  OVER = '🎉',
  EMPTY = '',
}
