/*Задача 3. 
Морський бій. 
Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. 
Користувач стріляє вказуючи координати. 
Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
*/

const startGame = document.getElementById("start");
const gameHelp = document.querySelector(".game__help");
const gameResult = document.querySelector(".game__result");
let gameBoard = document.querySelector(".game__board");
let shipsList = [];
let shipsNumber = 0;
let shots = 0;

startGame.addEventListener("click", function () {
  const gameBoardSize = getGameBoardSize(
    document.getElementById("boxNumber").value
  );

  shipsNumber = getGameBoardSize(document.getElementById("shipsNumber").value);
  shots = getGameBoardSize(document.getElementById("shotsNumber").value);

  if (gameBoardSize !== "error") {
    gameBoard.style = `grid-template-columns: repeat(${gameBoardSize}, 30px);`;

    buildGameElements(gameBoardSize);
    shipsList = generateShips(gameBoardSize, shipsNumber);
    console.log(shipsList);

    gameHelp.innerText = "Гра запущена!";
    gameResult.innerText = "Гра запущена!";
    gameHelp.classList.remove("error");
  } else {
    gameHelp.innerText = "Ви вказали не коректні данні!";
    gameHelp.classList.add("error");
  }
});

function getGameBoardSize(value) {
  let result;
  const size = parseInt(value.trim());

  if (Math.sign(size) <= 0 || Math.sign(size) === NaN) {
    result = "error";
  } else {
    result = size;
  }

  return result;
}

function buildGameElements(gameBoardSize = 10) {
  gameBoard.innerHTML = "";

  for (let i = 0; i < gameBoardSize; i++) {
    for (let j = 0; j < gameBoardSize; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.indexX = i;
      cell.dataset.indexY = j;
      cell.innerText = "?";
      cell.addEventListener("click", handleClickBox, { once: true });
      gameBoard.appendChild(cell);
    }
  }
}

function generateShips(gameBoardSize = 10, shipCount = 5) {
  const ships = Array.from({ length: gameBoardSize }, () =>
    Array(gameBoardSize).fill(0)
  );

  let shipsPlaced = 0;

  while (shipsPlaced < shipCount) {
    const row = Math.floor(Math.random() * gameBoardSize);
    const col = Math.floor(Math.random() * gameBoardSize);

    if (ships[row][col] === 1) {
      continue;
    }

    ships[row][col] = 1;
    shipsPlaced++;
  }

  return ships;
}

function handleClickBox(event) {
  const posX = event.target.dataset.indexX;
  const posY = event.target.dataset.indexY;

  const isHit = checkShipPosition(posX, posY, shipsList);

  if (isHit) {
    shipsNumber--;
    shots--;
    event.target.classList.add("hit");
    event.target.innerText = "1";
    gameResult.innerText = "Ви поразили крабель!";
    gameHelp.innerText = `Залишилось ${shipsNumber} кораблів і ${shots} пострілів`;
  } else {
    shots--;
    event.target.classList.add("miss");
    event.target.innerText = "";
    gameResult.innerText = "Ви промазали!";
    gameHelp.innerText = `Залишилось ${shipsNumber} кораблів і ${shots} пострілів`;
  }

  if (shipsNumber === 0) {
    gameResult.innerText = "Вітаю, ви потопили усі кораблі!";
    gameHelp.innerText = `Гру завершено! Ваш результат: залишилось ${shipsNumber} кораблів і ${shots} пострілів`;
    gameOver();
  } else if (shots === 0) {
    gameResult.innerText =
      "Нажаль, ви не вразили усі кораблі! Почніть нову гру.";
    gameHelp.innerText = `Гру завершено! Ваш результат: залишилось ${shipsNumber} кораблів і ${shots} пострілів`;
    gameOver(event.target);
  }
}

function checkShipPosition(positionX, positionY, shipsList) {
  return shipsList[positionX][positionY] === 1 ? true : false;
}

function gameOver() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.removeEventListener("click", handleClickBox);
  });
}
