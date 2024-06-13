import { Player } from "./player";
import {
  renderBoard,
  grabPlayerShips,
  initPlaceShip,
  renderForm,
  initFinSetup,
} from "./DOM";

let playerOne = Player("One");
let playerTwo = Player("Two");

renderBoard(playerOne);
renderBoard(playerTwo);

renderForm(playerOne);
renderForm(playerTwo);

grabPlayerShips(playerOne);
grabPlayerShips(playerTwo);

initPlaceShip(playerOne);
initPlaceShip(playerTwo);

initFinSetup(playerOne);
initFinSetup(playerTwo);
