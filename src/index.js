import { Player } from "./player";
import { renderBoard, grabPlayerShips, initPlaceShip } from "./DOM";

let playerOne = Player("One");
let playerTwo = Player("Two");
let playerOneShips = playerOne.board.getShips();
//let foo = playerOneShips.s_ship_I;

playerOne.board.createBoard();
playerTwo.board.createBoard();

//playerOne.board.placeShip(0, 1, foo);

grabPlayerShips(playerOne);
grabPlayerShips(playerTwo);

renderBoard(playerOne);
renderBoard(playerTwo);

initPlaceShip(playerOne);
