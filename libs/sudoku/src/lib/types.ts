export interface SudokuGame {
  candidates: SudokuGrid[];
  difficulty: SudokuDifficulty;
  score: number;
  solution: SudokuGrid;
  state: SudokuGrid;
}

export enum SudokuDifficulty {
  EASY = 0.5,
  MEDIUM = 0.65,
  HARD = 0.8,
}

export type SudokuGrid = number[][];
