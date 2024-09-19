import { Ship } from "./ship";

const Gameboard = () => {
  let board = [];
  let misses = [];
  let hits = [];

  let allShips = {
    battleship: Ship(4),
    cruiser_I: Ship(3),
    cruiser_II: Ship(3),
    destroyer_I: Ship(2),
    destroyer_II: Ship(2),
    destroyer_III: Ship(2),
    submarine_I: Ship(1),
    submarine_II: Ship(1),
    submarine_III: Ship(1),
    submarine_IV: Ship(1),
  };

  const getBoard = () => board;
  const getMisses = () => misses;
  const getShips = () => allShips;
  const getHits = () => hits;

  const createBoard = () => {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = null;
      }
    }

    return board;
  };

  const isEmpty = (x, y) => {
    return board[x][y] === null ? true : false;
  };

  const isFit = (arr) => {
    let status = true;

    arr.forEach((item) => {
      if (item[0] > 9 || item[1] > 9 || !isEmpty(item[0], item[1]))
        return (status = false);
    });

    return status;
  };

  const createComp = (x, y, ship) => {
    const length = ship.getShip().length;
    const orientation = ship.getShip().orientation;
    let temp = [];
    let a = x;
    let b = y;

    if (orientation === "horizontal") {
      while (b !== y + length) {
        temp.push([x, b]);
        b += 1;
      }
    } else {
      while (a !== x + length) {
        temp.push([a, y]);
        a += 1;
      }
    }

    return temp;
  };

  const placeShip = (x, y, ship) => {
    let temp = [];
    let status = true;

    if (y + length - 1 > 9 || x > 9 || x + length - 1 > 9 || y > 9) {
      return alert("Ship is out of bound");
    } else {
      temp = createComp(x, y, ship);
      status = isFit(temp);
    }

    if (status === false) {
      status = true;
      temp = [];
      return alert("square is already occupied");
    } else {
      ship.getShip().comp = temp;

      ship.getShip().comp.forEach((item) => {
        board[item[0]][item[1]] = ship;
      });
    }

    return board;
  };

  const populateBd = () => {
    const keys = Object.keys(allShips);
    const directions = ["horizontal", "vertical"];

    keys.forEach((key) => {
      const ship = allShips[key];
      const length = ship.getShip().length;

      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let z = Math.floor(Math.random() * 2);

      ship.getShip().orientation = directions[z];
      let temp = createComp(x, y, ship);
      let fit = isFit(temp);

      while (y + length - 1 > 9 || x + length - 1 > 9 || fit === false) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        z = Math.floor(Math.random() * 2);

        ship.getShip().orientation = directions[z];
        temp = createComp(x, y, ship);
        fit = isFit(temp);
      }

      placeShip(x, y, ship);
    });

    return board;
  };

  const receiveAttack = (x, y) => {
    if (board[x][y] === null) misses.push([x, y]);
    else {
      hits.push([x, y]);
      board[x][y].hit();
      board[x][y].getShip().hitCoor.push([x, y]);
    }

    return board;
  };

  const isAllSunk = () => {
    const ships = Object.values(allShips);
    let status = true;

    ships.forEach((ship) => {
      if (!ship.isSunk()) {
        return (status = false);
      }
    });

    return status;
  };

  const resetBoard = () => {
    const keys = Object.keys(allShips);
    board = [];
    misses = [];
    hits = [];

    keys.forEach((ship) => {
      allShips[ship].resetShip();
    });
  };

  return {
    createBoard,
    placeShip,
    getBoard,
    getShips,
    receiveAttack,
    getMisses,
    getHits,
    isAllSunk,
    populateBd,
    resetBoard,
  };
};

export { Gameboard };
