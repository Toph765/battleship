import { Ship } from "./ship";

const Gameboard = () => {
  let board = [];

  const getBoard = () => board;

  const createBoard = () => {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = null;
      }
    }

    return board;
  };

  const placeShip = (x, y, ship) => {
    const length = ship.getShip().length;
    let a = x;
    let b = y;

    if (ship.getShip().orientation === "horizontal") {
      while (b !== y + length) {
        board[x][b] = ship;
        b += 1;
      }
    } else {
      while (a !== x + length) {
        board[a][y] = ship;
        a += 1;
      }
    }

    return board;
  };

  return {
    createBoard,
    placeShip,
    getBoard,
  };
};

export { Gameboard };
