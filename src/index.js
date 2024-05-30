import { Player } from "./player";
import { renderBoard } from "./DOM";

let playerOne = Player("One");
let playerTwo = Player("Two");

playerOne.board.createBoard();
playerTwo.board.createBoard();

renderBoard(playerOne);
renderBoard(playerTwo);
