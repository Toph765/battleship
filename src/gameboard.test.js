import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

let board = Gameboard();
const ship = Ship(2);

board.createBoard();
board.placeShip(2, 3, ship);

test("place ship", () => {
  expect(board.getBoard()[2][3].getShip()).toEqual({
    length: 2,
    hitCount: 0,
    sunk: false,
    orientation: "horizontal",
  });
});

test("place ship", () => {
  expect(board.getBoard()[2][4].getShip()).toEqual({
    length: 2,
    hitCount: 0,
    sunk: false,
    orientation: "horizontal",
  });
});

test("attack ship", () => {
  board.receiveAttack(2, 3);
  expect(board.getBoard()[2][3].getShip().hitCount).toBe(1);
});

test("miss an attack", () => {
  board.receiveAttack(2, 5);
  expect(board.getMisses()).toEqual([[2, 5]]);
});

test("get hit count", () => {
  let board = Gameboard();
  let shipI = board.getShips().s_ship_I;

  board.createBoard();
  board.placeShip(1, 2, shipI);
  board.receiveAttack(1, 2);

  expect(board.getShips().s_ship_I.getShip().hitCount).toBe(1);
});

test("all is sunk: false", () => {
  let board = Gameboard();
  let shipI = board.getShips().s_ship_I;
  let shipII = board.getShips().xs_ship_I;

  board.createBoard();
  board.placeShip(1, 2, shipI);
  board.placeShip(2, 2, shipII);
  board.receiveAttack(1, 2);
  board.receiveAttack(1, 3);
  board.receiveAttack(2, 2);

  expect(board.isAllSunk()).toBe(false);
});
