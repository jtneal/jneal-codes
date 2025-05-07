export const styles = `
  .sudoku-game {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  }

  .sudoku-header {
    position: relative;
    text-align: center;
    width: 468px;
  }

  .sudoku-title {
    font-family: 'Courier New', Courier, monospace;
  }

  .sudoku-score {
    color: #f00;
    position: absolute;
    right: 0;
    top: 9px;
  }

  .sudoku-card {
    background-color: #000;
    border: 6px solid #000;
    display: grid;
    gap: 3px;
    grid-template-columns: repeat(9, 3rem);
    grid-template-rows: repeat(9, 3rem);
    margin-bottom: 1rem;
    width: fit-content;
  }

  .sudoku-cell {
    align-items: center;
    background-color: #fff;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;

    &:nth-child(9n+3),
    &:nth-child(9n+6) {
      margin-right: 3px;
    }

    &:nth-child(n+19):nth-child(-n+27),
    &:nth-child(n+46):nth-child(-n+54) {
      margin-bottom: 3px;
    }
  }
`;
