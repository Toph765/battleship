const fillSqr = (sqr, tag) => {
  if (sqr === null) {
    tag.setAttribute("style", "background-color: blue;");
  }
};

const renderBoard = (player) => {
  player.board.createBoard();

  const board = player.board.getBoard();
  const playerNum = player.number;
  let currentBoard = document.getElementById(`board${playerNum}`);

  while (currentBoard.lastElementChild)
    currentBoard.removeChild(currentBoard.lastElementChild);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const square = document.createElement("button");
      square.setAttribute("data-x", `${i}`);
      square.setAttribute("data-y", `${j}`);

      fillSqr(board[i][j], square);

      currentBoard.appendChild(square);
    }
  }

  return currentBoard;
};

const grabPlayerShips = (player) => {
  const shipsObj = player.board.getShips();
  const ships = Object.keys(shipsObj);
  const selection = document.querySelector(`#player${player.number}-ships`);

  ships.forEach((ship) => {
    const option = document.createElement("option");
    option.textContent = ship;
    selection.appendChild(option);
  });

  return selection;
};

const initPlaceShip = (player) => {
  const button = document.querySelector("#placeShipBtn");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const xCoor = parseInt(
      document.querySelector(`#player${player.number}-y`).value
    );
    const yCoor = parseInt(
      document.querySelector(`#player${player.number}-x`).value
    );
    const shipName = document.querySelector(
      `#player${player.number}-ships`
    ).value;

    const ship = player.board.getShips()[shipName];

    player.board.placeShip(xCoor, yCoor, ship);
    renderBoard(player);
  });
};

export { renderBoard, grabPlayerShips, initPlaceShip };
