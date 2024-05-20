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
  let foo = board.getShips().foo;

  board.createBoard();
  board.placeShip(1, 2, foo);
  board.receiveAttack(1, 2);

  expect(board.getShips().foo.getShip().hitCount).toBe(1);
});
