const fillSqr = (sqr, tag) => {
  if (sqr === null) {
    tag.setAttribute("style", "background-color: blue;");
  }
};

const renderShip = (player) => {
  let board = player.board.getBoard();
  const shipsObj = player.board.getShips();
  const shipsList = Object.keys(shipsObj);

  shipsList.forEach((ship) => {
    const xCoor = shipsObj[ship].getShip().xCoor;
    const yCoor = shipsObj[ship].getShip().yCoor;

    if (xCoor !== null) {
      player.board.placeShip(xCoor, yCoor, shipsObj[ship]);
    }
  });

  return board;
};

const renderBoard = (player) => {
  player.board.createBoard();

  renderShip(player);

  const board = player.board.getBoard();
  const playerNum = player.number;
  let currentBoard = document.getElementById(`board${playerNum}`);

  while (currentBoard.lastElementChild)
    currentBoard.removeChild(currentBoard.lastElementChild);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const square = document.createElement("div");
      square.classList.add(`${playerNum}-square`);

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
  const button = document.querySelector(`#placeShipBtn-${player.number}`);

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

    const orient = document.querySelector(
      `#player${player.number}-orient`
    ).value;

    const ship = player.board.getShips()[shipName];

    ship.getShip().orientation = orient;
    console.log(orient);

    player.board.placeShip(xCoor, yCoor, ship);
    renderBoard(player);
  });
};

const renderForm = (player) => {
  const playerNo = player.number;

  const main = document.querySelector(`#player${playerNo}`);

  const form = document.createElement("form");
  const selection = document.createElement("select");
  const orientation = document.createElement("select");
  const inputX = document.createElement("input");
  const inputY = document.createElement("input");
  const button = document.createElement("button");
  const cross = document.createElement("option");
  const long = document.createElement("option");
  const fin = document.createElement("button");

  form.setAttribute("id", `player${playerNo}-form`);

  selection.setAttribute("name", "ships");
  selection.setAttribute("id", `player${playerNo}-ships`);

  orientation.setAttribute("name", "orientation");
  orientation.setAttribute("id", `player${playerNo}-orient`);

  inputX.setAttribute("type", "text");
  inputX.setAttribute("id", `player${playerNo}-x`);
  inputX.setAttribute("name", "x-coor");
  inputX.setAttribute("placeholder", "x");

  inputY.setAttribute("type", "text");
  inputY.setAttribute("id", `player${playerNo}-y`);
  inputY.setAttribute("name", "y-coor");
  inputY.setAttribute("placeholder", "y");

  button.setAttribute("id", `placeShipBtn-${playerNo}`);
  button.textContent = "Place";

  fin.setAttribute("id", `player${playerNo}-finBtn`);
  fin.textContent = "Finish set up";

  cross.textContent = "horizontal";
  long.textContent = "vertical";

  orientation.append(cross, long);
  form.append(selection, inputX, inputY, orientation, button, fin);
  main.appendChild(form);

  return main;
};

const initFinSetup = (player) => {
  const button = document.querySelector(`#player${player.number}-finBtn`);
  const form = document.querySelector(`#player${player.number}-form`);
  const shipsObj = player.board.getShips();
  const ships = Object.values(shipsObj);
  let isAllPlaced = false;

  ships.forEach((ship) => {
    if (ship.getShip().xCoor === null) return (isAllPlaced = false);
    else isAllPlaced = true;
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();

    ships.forEach((ship) => {
      if (ship.getShip().xCoor === null) return (isAllPlaced = false);
      else isAllPlaced = true;
    });

    isAllPlaced
      ? form.setAttribute("style", "display: none;")
      : console.log("Please place all the ships first");

    hideBoard(player);

    if (player.number === "Two") {
      const dialog = document.querySelector(".dialog");
      dialog.showModal();
    }
  });
};

const hideBoard = (player) => {
  let squares = document.querySelectorAll(`.${player.number}-square`);

  squares.forEach((square) => {
    square.setAttribute("disabled", "");
    square.setAttribute("style", "background-color: gray;");
  });
};

const initplayBtn = (POne, PTwo) => {
  const dialog = document.querySelector(".dialog");
  const playWindow = document.querySelector("#play-window");
  const playBtn = document.querySelector("#play");

  playBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let player = playWindow.getAttribute("data-id");

    if (player === "player-Two") {
      renderBoard(POne);
      renderPlayBd(PTwo);
      playWindow.setAttribute("data-id", `player-${POne.number}`);
      return dialog.close();
    } else if (player === "player-One") {
      renderBoard(PTwo);
      renderPlayBd(POne);
      playWindow.setAttribute("data-id", `player-${PTwo.number}`);
      return dialog.close();
    }
  });
};

const renderPlayBd = (player) => {
  const board = player.board.getBoard();
  const misses = player.board.getMisses();
  const currBoard = document.querySelector(`#board${player.number}`);

  while (currBoard.lastElementChild)
    currBoard.removeChild(currBoard.lastElementChild);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const item = board[i][j];

      const square = document.createElement("button");
      square.classList.add(`${player.number}-square`);

      square.setAttribute("data-x", `${i}`);
      square.setAttribute("data-y", `${j}`);

      initSqrBtn(player, square);

      if (
        item !== null &&
        item.getShip().hitCount > 0 &&
        item.getShip().hitCoor.find((item) => {
          return item[0] === `${i}` && item[1] === `${j}`;
        })
      ) {
        square.setAttribute("style", "background-color: red;");
        square.setAttribute("disabled", "");
      }

      if (
        misses.find((item) => {
          return item[0] === `${i}` && item[1] === `${j}`;
        })
      ) {
        square.setAttribute("style", "background-color: green;");
        square.setAttribute("disabled", "");
      }

      currBoard.appendChild(square);
    }
  }
};

const initSqrBtn = (player, square) => {
  const board = player.board;
  const boardList = board.getBoard();
  const dialog = document.querySelector(".dialog");
  const x = square.getAttribute("data-x");
  const y = square.getAttribute("data-y");

  square.addEventListener("click", (e) => {
    e.preventDefault();

    board.receiveAttack(x, y);
    if (boardList[x][y] === null) {
      hideBoard(player);
      square.setAttribute("style", "background-color: red;");
      dialog.showModal();
    } else {
      square.setAttribute("style", "background-color: green;");
    }
  });
};

export {
  renderBoard,
  grabPlayerShips,
  initPlaceShip,
  renderForm,
  initFinSetup,
  initplayBtn,
};
