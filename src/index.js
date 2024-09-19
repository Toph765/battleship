import { Player } from "./player";
import {
  renderBoard,
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

  initPlaceShip(playerOne, playerTwo);

  initFinSetup(playerOne, playerTwo);

  initplayBtn(playerOne, playerTwo);

  return gameMode.close();
});

pvcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const main = document.querySelector("main");

  renderBoard(playerOne);
  renderBoard(playerTwo);
  initPlaceShip(playerOne, playerTwo);
  initFinSetup(playerOne, playerTwo);
  initplayBtn(playerOne, playerTwo);

  compMode(playerTwo);

  main.classList.add("pvc");

  return gameMode.close();
});

document.addEventListener("onload", gameMode.showModal());
