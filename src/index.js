import { Player } from "./player";
import {
  renderBoard,
  initPlaceShip,
  initFinSetup,
  initplayBtn,
  compMode,
  initRandBtn,
  renderShape,
} from "./DOM";

const gameMode = document.querySelector(".game_mode");
const pvpBtn = document.querySelector("#pvp");
const pvcBtn = document.querySelector("#pvc");
const restartBtn = document.querySelectorAll(".restart");
const endMsg = document.querySelector(".end-game");
const form = document.querySelector("form");
const select = document.querySelector("#ships");
let playerOne = Player("One");
let playerTwo = Player("Two");

initPlaceShip(playerOne, playerTwo);
initFinSetup(playerOne, playerTwo);
initplayBtn(playerOne, playerTwo);
initRandBtn(playerOne, playerTwo);
renderBoard(playerOne);
renderBoard(playerTwo);
renderShape(playerOne);

pvpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  return gameMode.close();
});

pvcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const main = document.querySelector("main");

  compMode(playerTwo);

  main.classList.add("pvc");

  return gameMode.close();
});

restartBtn.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const main = document.querySelector("main");
    const window = document.querySelector("#play-window");
    const x = document.querySelector("#x-coor");
    const y = document.querySelector("#y-coor");
    const opt = document.querySelector("#battleship");
    const squares = document.querySelectorAll(".square");

    endMsg.close();

    form.setAttribute("id", "playerOne-form");
    form.removeAttribute("style");
    main.classList.remove("pvc");
    window.setAttribute("data-id", "player-Two");

    squares.forEach((square) => {
      square.removeAttribute("style");
    });

    x.value = "";
    y.value = "";
    opt.removeAttribute("selected");
    opt.setAttribute("selected", "");

    playerOne.board.resetBoard();
    playerTwo.board.resetBoard();

    renderBoard(playerOne);
    renderBoard(playerTwo);
    gameMode.showModal();
  })
);

select.addEventListener("change", () => {
  const shapeCont = document.querySelector(".shape");

  while (shapeCont.lastElementChild)
    shapeCont.removeChild(shapeCont.lastElementChild);

  renderShape(playerOne);
});

document.addEventListener("onload", gameMode.showModal());
