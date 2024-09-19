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
const restartBtn = document.querySelectorAll(".restart");
const endMsg = document.querySelector(".end-game");
const form = document.querySelector("form");
let playerOne = Player("One");
let playerTwo = Player("Two");

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

restartBtn.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.preventDefault();

    endMsg.close();
    form.setAttribute("id", "playerOne-form");
    form.removeAttribute("style");

    playerOne.board.resetBoard();
    playerTwo.board.resetBoard();
    gameMode.showModal();
  })
);

document.addEventListener("onload", gameMode.showModal());
