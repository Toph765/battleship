import { Gameboard } from "./gameboard";

const Player = (number) => {
  let win = false;
  let board = Gameboard();
  let isComp = false;

  return {
    number,
    win,
    board,
    isComp,
  };
};

export { Player };
