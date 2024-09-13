import { Ship } from "./ship";

const Gameboard = () => {
  let board = [];
  let misses = [];
  let hits = [];

  let allShips = {
    l_ship: Ship(4),
    m_ship_I: Ship(3),
    m_ship_II: Ship(3),
    s_ship_I: Ship(2),
    s_ship_II: Ship(2),
    s_ship_III: Ship(2),
    xs_ship_I: Ship(1),
    xs_ship_II: Ship(1),
    xs_ship_III: Ship(1),
    xs_ship_IV: Ship(1),
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
      return console.log("error");
    } else {
      temp = createComp(x, y, ship);
      status = isFit(temp);
    }

    if (status === false) {
      status = true;
      temp = [];
      return console.log("not empty");
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
      board[x][y].hit();
      board[x][y].getShip().hitCoor.push([x, y]);
    }

    return board;
  };

  const isAllSunk = () => {
    const ships = Object.values(allShips);
    let status = false;

    ships.forEach((ship) => {
      if (ship.getShip().sunk === false) {
        return (status = false);
      } else status = true;
    });

    return status;
  };

  return {
    createBoard,
    placeShip,
    getBoard,
    getShips,
    receiveAttack,
    getMisses,
    isAllSunk,
    populateBd,
  };
};

export { Gameboard };
