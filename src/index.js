import { Player } from "./player";
import { renderBoard } from "./DOM";

let playerOne = Player("One");
let playerTwo = Player("Two");
let playerOneShips = playerOne.board.getShips();
let foo = playerOneShips.s_ship_I;

playerOne.board.createBoard();
playerTwo.board.createBoard();

playerOne.board.placeShip(0, 1, foo);

renderBoard(playerOne);
renderBoard(playerTwo);
