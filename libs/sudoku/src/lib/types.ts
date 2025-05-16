export interface SudokuGame {
  board: SudokuGrid;
  difficulty: SudokuDifficultyEnum;
  endTime?: Date;
  score: number;
  solution: SudokuGrid;
  startTime?: Date;
  status: SudokuStatusEnum;
}

export type SudokuGrid = number[][];

export enum SudokuDifficultyEnum {
  EASY = 0.5,
  MEDIUM = 0.625,
  HARD = 0.75,
}

export enum SudokuStatusEnum {
  CORRECT = '✅',
  INCORRECT = '❌',
  OVER = '🎉',
  EMPTY = '',
}

export interface SudokuDifficultyOption {
  label: string;
  value: SudokuDifficultyEnum;
}
