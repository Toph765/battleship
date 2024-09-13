const fillSqr = (player, sqr, tag, x, y) => {
  const misses = player.board.getMisses();

  if (sqr === null) {
    if (
      misses.find((item) => {
        return item[0] === x && item[1] === y;
      })
    ) {
      tag.setAttribute("style", "background-color: yellow;");
    } else {
      tag.setAttribute("style", "background-color: blue;");
    }
  } else if (
    sqr.getShip().hitCoor.find((item) => {
      return item[0] === x && item[1] === y;
    })
  ) {
    tag.setAttribute("style", "background-color: red;");
  }
};

const renderShip = (player) => {
  let board = player.board.getBoard();
  const shipsObj = player.board.getShips();
  const shipsList = Object.keys(shipsObj);

  shipsList.forEach((ship) => {
    const comp = shipsObj[ship].getShip().comp;

    if (comp.length !== 0) {
      const xCoor = comp[0][0];
      const yCoor = comp[0][1];
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

      fillSqr(player, board[i][j], square, i, j);

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

    if (Number.isNaN(xCoor) || Number.isNaN(yCoor)) return;
    else {
      player.board.placeShip(xCoor, yCoor, ship);
      renderBoard(player);
    }
  });
};

const initFinSetup = (player) => {
  const main = document.querySelector("main");
  const button = document.querySelector(`#player${player.number}-finBtn`);
  const form = document.querySelector(`#player${player.number}-form`);
  const shipsObj = player.board.getShips();
  const ships = Object.values(shipsObj);
  let isAllPlaced = false;

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const mode = main.getAttribute("class");

    ships.forEach((ship) => {
      const comp = ship.getShip().comp;
      if (comp.length === 0) return (isAllPlaced = false);
      else return (isAllPlaced = true);
    });

    if (isAllPlaced) {
      form.setAttribute("style", "display: none;");
      hideBoard(player);

      if (mode === "pvc" || player.number === "Two") {
        const dialog = document.querySelector(".dialog");
        dialog.showModal();
      }
    } else {
      alert("Please place all the ships first");
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
  const main = document.querySelector("main");
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
      const mode = main.getAttribute("class");
      playWindow.setAttribute("data-id", `player-${PTwo.number}`);
      if (mode === "pvc") {
        autoAtk(POne, PTwo);
        return dialog.close();
      } else {
        renderBoard(PTwo);
        renderPlayBd(POne);
        return dialog.close();
      }
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
          return item[0] === i && item[1] === j;
        })
      ) {
        square.setAttribute("style", "background-color: red;");
        square.setAttribute("disabled", "");
      }

      if (
        misses.find((item) => {
          return item[0] === i && item[1] === j;
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
  const x = parseInt(square.getAttribute("data-x"));
  const y = parseInt(square.getAttribute("data-y"));

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

const compMode = (player) => {
  player.board.populateBd();
  renderBoard(player);
  hideBoard(player);
};

const autoAtk = (playOne, playTwo) => {
  const board = playOne.board;
  const boardList = board.getBoard();
  const misses = board.getMisses();
  const hits = board.getHits();
  const playWindow = document.querySelector("#play-window");
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let cont = true;

  while (cont === true) {
    if (
      misses.find((item) => {
        return item[0] === x && item[1] === y;
      }) ||
      hits.find((item) => {
        return item[0] === x && item[1] === y;
      })
    ) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      continue;
    }

    board.receiveAttack(x, y);

    if (boardList[x][y] === null) {
      playWindow.setAttribute("data-id", `player-${playOne.number}`);
      renderBoard(playOne);
      renderPlayBd(playTwo);
      cont = false;
    } else {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
  }
};

export {
  renderBoard,
  grabPlayerShips,
  initPlaceShip,
  initFinSetup,
  initplayBtn,
  compMode,
};
