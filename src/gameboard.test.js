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
