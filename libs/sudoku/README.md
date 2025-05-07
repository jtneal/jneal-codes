# @jneal-codes/sudoku

This is an extremely lightweight sudoku game engine written in TypeScript.

## Installation

```shell
npm install @jneal-codes/sudoku
```

## Usage

```typescript
import { createSudokuGame, SudokuDifficulty } from '@jneal-codes/sudoku';

const game = createSudokuGame(SudokuDifficulty.EASY);

console.log(game.solution);

// [
//   [3, 1, 5, 8, 2, 7, 9, 4, 6],
//   [4, 6, 8, 9, 1, 5, 7, 3, 2],
//   [7, 2, 9, 3, 4, 6, 5, 1, 8],
//   [9, 4, 6, 5, 3, 8, 1, 2, 7],
//   [5, 7, 1, 6, 9, 2, 4, 8, 3],
//   [8, 3, 2, 1, 7, 4, 6, 9, 5],
//   [6, 9, 3, 2, 5, 1, 8, 7, 4],
//   [2, 5, 7, 4, 8, 9, 3, 6, 1],
//   [1, 8, 4, 7, 6, 3, 2, 5, 9],
// ]
```
