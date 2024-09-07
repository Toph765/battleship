import { Player } from "./player";
import {
  renderBoard,
  grabPlayerShips,
  initPlaceShip,
  initFinSetup,
  initplayBtn,
  compMode,
} from "./DOM";

const gameMode = document.querySelector(".game_mode");
const pvpBtn = document.querySelector("#pvp");
const pvcBtn = document.querySelector("#pvc");
const playerOne = Player("One");
const playerTwo = Player("Two");

pvpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  renderBoard(playerOne);
  renderBoard(playerTwo);

  grabPlayerShips(playerOne);
  grabPlayerShips(playerTwo);

  initPlaceShip(playerOne);
  initPlaceShip(playerTwo);

  initFinSetup(playerOne);
  initFinSetup(playerTwo);

  initplayBtn(playerOne, playerTwo);

  return gameMode.close();
});

pvcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const main = document.querySelector("main");
  const form = document.querySelector("#playerTwo-form");

  renderBoard(playerOne);
  renderBoard(playerTwo);
  grabPlayerShips(playerOne);
  initPlaceShip(playerOne);
  initFinSetup(playerOne);
  initFinSetup(playerTwo);
  initplayBtn(playerOne, playerTwo);

  compMode(playerTwo);

  form.setAttribute("style", "display: none;");
  main.classList.add("pvc");

  return gameMode.close();
});

document.addEventListener("onload", gameMode.showModal());
