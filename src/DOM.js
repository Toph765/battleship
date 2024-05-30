const renderBoard = (player) => {
  const board = player.board.getBoard();
  const playerNum = player.number;
  let currentBoard = document.getElementById(`board${playerNum}`);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const square = document.createElement("button");
      square.setAttribute("data-x", `${i}`);
      square.setAttribute("data-y", `${j}`);

      currentBoard.appendChild(square);
    }
  }

  return currentBoard;
};

export { renderBoard };
