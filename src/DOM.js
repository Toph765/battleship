const fillSqr = (player, sqr, tag, x, y) => {
  const misses = player.board.getMisses();

  if (sqr === null) {
    if (
      misses.find((item) => {
        return item[0] === x && item[1] === y;
      })
    ) {
      tag.setAttribute("style", "background-color: #FCCD2A;");
    } else {
      tag.setAttribute("style", "background-color: #6A9AB0;");
    }
  } else if (
    sqr.getShip().hitCoor.find((item) => {
      return item[0] === x && item[1] === y;
    })
  ) {
    tag.setAttribute("style", "background-color: #D91656;");
  } else {
    tag.setAttribute("style", "background-color: #FCFAEE;");
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

const initPlaceShip = (pOne, pTwo) => {
  const button = document.querySelector(`#placeShipBtn`);

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.querySelector("form");
    let id = form.getAttribute("id");

    const xCoor = parseInt(document.querySelector(`#y-coor`).value);
    const yCoor = parseInt(document.querySelector(`#x-coor`).value);
    const shipName = document.querySelector(`#ships`).value;

    const orient = document.querySelector(`#orientation`).value;

    let ship;
    id === "playerOne-form"
      ? (ship = pOne.board.getShips()[shipName])
      : (ship = pTwo.board.getShips()[shipName]);

    ship.getShip().orientation = orient;

    if (Number.isNaN(xCoor) || Number.isNaN(yCoor)) return;
    else {
      if (id === "playerOne-form") {
        pOne.board.placeShip(xCoor, yCoor, ship);
        renderBoard(pOne);
      } else {
        pTwo.board.placeShip(xCoor, yCoor, ship);
        renderBoard(pTwo);
      }
    }
  });
};

const initFinSetup = (pOne, pTwo) => {
  const main = document.querySelector("main");
  const button = document.querySelector(`#finBtn`);
  const form = document.querySelector(`form`);
  const playerName = document.querySelector(".player-name");

  let isAllPlaced = false;

  button.addEventListener("click", (e) => {
    e.preventDefault();

    let shipsObj;
    const mode = main.getAttribute("class");
    let id = form.getAttribute("id");

    id === "playerOne-form"
      ? (shipsObj = pOne.board.getShips())
      : (shipsObj = pTwo.board.getShips());

    const ships = Object.values(shipsObj);

    ships.forEach((ship) => {
      const comp = ship.getShip().comp;
      if (comp.length === 0) return (isAllPlaced = false);
      else return (isAllPlaced = true);
    });

    if (isAllPlaced) {
      const shapeCont = document.querySelector(".shape");
      const ships = document.querySelector("#ships");
      const x = document.querySelector("#x-coor");
      const y = document.querySelector("#y-coor");
      const opt = ships.querySelector(".battleship");
      const message = document.querySelector(".message");
      const span = document.querySelector("span");

      x.value = "";
      y.value = "";
      shapeCont.classList.remove("vertical");
      opt.removeAttribute("selected");
      opt.setAttribute("selected", "");
      renderShape(pTwo);

      if (id === "playerOne-form") {
        span.textContent = "Player Two";
        form.setAttribute("id", "playerTwo-form");
        hideBoard(pOne);
      }

      if (mode === "pvc" || id === "playerTwo-form") {
        form.setAttribute("style", "display: none;");
        message.setAttribute("style", "display: none;");
        hideBoard(pTwo);
        const dialog = document.querySelector(".dialog");
        playerName.textContent = "Player One`s turn!";
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
      renderPlayBd(POne, PTwo, player);
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
        renderPlayBd(POne, PTwo, player);
        return dialog.close();
      }
    }
  });
};

const renderPlayBd = (pOne, pTwo, id) => {
  let board;
  let misses;
  let currBoard;

  if (id === "player-Two") {
    board = pTwo.board.getBoard();
    misses = pTwo.board.getMisses();
    currBoard = document.querySelector(`#board${pTwo.number}`);
  } else {
    board = pOne.board.getBoard();
    misses = pOne.board.getMisses();
    currBoard = document.querySelector(`#board${pOne.number}`);
  }

  while (currBoard.lastElementChild)
    currBoard.removeChild(currBoard.lastElementChild);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const item = board[i][j];

      const square = document.createElement("button");
      if (id === "player-One") {
        square.classList.add(`${pOne.number}-square`);
      } else {
        square.classList.add(`${pTwo.number}-square`);
      }

      square.setAttribute("data-x", `${i}`);
      square.setAttribute("data-y", `${j}`);

      initSqrBtn(pOne, pTwo, square);

      if (
        item !== null &&
        item.getShip().hitCount > 0 &&
        item.getShip().hitCoor.find((item) => {
          return item[0] === i && item[1] === j;
        })
      ) {
        square.setAttribute("style", "background-color: #D91656;");
        square.setAttribute("disabled", "");
      }

      if (
        misses.find((item) => {
          return item[0] === i && item[1] === j;
        })
      ) {
        square.setAttribute("style", "background-color: #15B392;");
        square.setAttribute("disabled", "");
      }

      currBoard.appendChild(square);
    }
  }
};

const initSqrBtn = (pOne, pTwo, square) => {
  const dialog = document.querySelector(".dialog");
  const x = parseInt(square.getAttribute("data-x"));
  const y = parseInt(square.getAttribute("data-y"));
  const winner = document.querySelector(".winner");
  const endMsg = document.querySelector(".end-game");
  const window = document.querySelector("#play-window");
  const playerName = document.querySelector(".player-name");
  const main = document.querySelector("main");

  square.addEventListener("click", (e) => {
    e.preventDefault();
    const squareId = square.getAttribute("class");
    const id = window.getAttribute("data-id");
    const mode = main.getAttribute("class");
    let board;
    let boardList;

    if (squareId === "One-square") {
      board = pOne.board;
    } else {
      board = pTwo.board;
    }

    boardList = board.getBoard();

    board.receiveAttack(x, y);
    if (boardList[x][y] === null) {
      if (squareId === "One-square") {
        hideBoard(pTwo);
      } else {
        hideBoard(pOne);
      }

      square.setAttribute("style", "background-color: #FCCD2A;");

      if (mode === "pvc") {
        playerName.textContent = "Computer`s turn!";
      } else {
        id === "player-One"
          ? (playerName.textContent = "Player Two`s turn!")
          : (playerName.textContent = "Player One`s turn!");
      }

      dialog.showModal();
    } else {
      if (squareId === "One-square") {
        updateShiplist(boardList[x][y], pOne.number);
      } else {
        updateShiplist(boardList[x][y], pTwo.number);
      }
      square.setAttribute("style", "background-color: #D91656;");

      if (board.isAllSunk()) {
        square.setAttribute("style", "background-color: #D91656;");
        endMsg.showModal();
        if (id === "player-Two") {
          winner.textContent = `Congratulations Player Two!`;
        } else {
          winner.textContent = `Congratulations Player One!`;
        }
      }
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
  const winner = document.querySelector(".winner");
  const endMsg = document.querySelector(".end-game");
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
      const id = `player-${playTwo.number}`;
      playWindow.setAttribute("data-id", `player-${playOne.number}`);
      renderBoard(playOne);
      renderPlayBd(playOne, playTwo, id);
      cont = false;
    } else {
      updateShiplist(playOne.board.getBoard()[x][y], playOne.number);
      if (playOne.board.isAllSunk()) {
        cont = false;
        endMsg.showModal();
        winner.textContent = "Computer won!";
      } else {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }
    }
  }
};

const initRandBtn = (pOne, pTwo) => {
  const form = document.querySelector("form");
  const randBtn = document.querySelector("#random");

  randBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const id = form.getAttribute("id");

    if (id === "playerOne-form") {
      pOne.board.populateBd();
      renderBoard(pOne);
    } else {
      pTwo.board.populateBd();
      renderBoard(pTwo);
    }
  });
};

const renderShape = (player) => {
  const shipsObj = player.board.getShips();
  const selected = document.querySelector("#ships");
  const name = selected.value;
  const ship = shipsObj[name];
  const length = ship.getShip().length;
  const shapeCont = document.querySelector(".shape");

  while (shapeCont.lastElementChild)
    shapeCont.removeChild(shapeCont.lastElementChild);

  for (let i = 1; i <= length; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    shapeCont.appendChild(square);
  }
};

const updateShiplist = (ship, number) => {
  const name = ship.getShip().name;
  const shipsList = document.querySelector(`.shiplist-${number}`);
  const shipCont = shipsList.querySelector(`.${name}`);
  const squares = shipCont.querySelectorAll(".square");
  const temp = [];

  if (ship.isSunk()) {
    squares.forEach((square) => {
      square.setAttribute("style", "background-color: #D91656;");
    });
  }
};

export {
  renderBoard,
  initPlaceShip,
  initFinSetup,
  initplayBtn,
  compMode,
  initRandBtn,
  renderShape,
};
