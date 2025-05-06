export interface SudokuGame {
  solution: SudokuGrid;
  state: SudokuGrid;
}

export type SudokuGrid = number[][];

export enum SudokuDifficulty {
  EASY = 0.5,
  MEDIUM = 0.65,
  HARD = 0.8,
}
