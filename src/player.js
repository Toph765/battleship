import { Gameboard } from "./gameboard";

const Player = (name) => {
  let win = false;
  let board = Gameboard();
  return {
    name,
    win,
    board,
  };
};

export { Player };
