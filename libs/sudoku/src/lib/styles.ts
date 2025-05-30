export const styles = `
  .sudoku-game {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;

    header {
      align-items: center;
      display: flex;
      font-family: 'Courier New', Courier, monospace;
      justify-content: space-between;
      width: 468px;

      h2 {
        width: 100px;

        &:last-child {
          color: #f00;
          text-align: right;
        }
      }
    }

    main {
      background-color: #000;
      border: 6px solid #000;
      display: grid;
      gap: 3px;
      grid-template-columns: repeat(9, 3rem);
      grid-template-rows: repeat(9, 3rem);
      margin-bottom: 1rem;
      width: fit-content;

      article {
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

      input {
        font-size: 1.4rem;
        height: 2.5rem;
        text-align: center;
        width: 2.5rem;
      }
    }

    footer {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 468px;

      select,
      button {
        padding: 0.333rem;
      }
    }
  }
`;
