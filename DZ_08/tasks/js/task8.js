/*Задача 8.
Дано одновимірний масив, у якому зберігається певна виграшна сума 
(елементи заповнюються випадковим чином значеннями від -500 до 500). 
Надаючи користувачу можливість вибирати номери елементів (поки він не відмовиться). 
Знаходити сумарний виграш.
*/

function getRandomNumber(min = -500, max = 500) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function generatePrizeList(elementsNumber = 10) {
  const prizeList = [];
  for (let i = 0; i < elementsNumber; i++) {
    prizeList.push(getRandomNumber());
  }
  return prizeList;
}

function finishGame(...elemets) {
  elemets.forEach((element) => {
    element.innerHTML = "";
  });
}

const gameButton = document.getElementById("start-button");
const gameResult = document.querySelector(".game__result");
const gameHelp = document.querySelector(".game__help");
const gameInfo = document.querySelector(".game-info");

gameButton.addEventListener("click", function () {
  let totalScore = 0;
  const boxItemsNumber = parseInt(document.getElementById("box").value);
  const gamePrizeList = generatePrizeList(boxItemsNumber);

  let gameBoard = document.querySelector(".game-board");
  gameBoard.innerHTML = "";
  gameInfo.innerHTML = "";

  for (let i = 0; i < gamePrizeList.length; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.innerText = "?";

    cell.addEventListener(
      "click",
      function (event) {
        let boxIndex = parseInt(event.target.dataset.index);
        cell.innerText = gamePrizeList[boxIndex];

        if (gamePrizeList[boxIndex] > 0) {
          event.target.classList.add("win");
          totalScore += gamePrizeList[boxIndex];
          gameResult.innerText = `Вітаю! Ви отримали ${gamePrizeList[boxIndex]} гривень`;
        } else {
          event.target.classList.add("lose");
          totalScore += gamePrizeList[boxIndex];
          gameResult.innerText = `Упс! Ви втратили ${gamePrizeList[boxIndex]} гривень`;
        }

        gameHelp.innerText = "Ваш поточний виграш складає: " + totalScore;
      },
      { once: true }
    );
    gameBoard.appendChild(cell);
  }

  let finishGameButton = document.createElement("button");
  finishGameButton.innerText = "Забрати виграш";
  finishGameButton.className = "finish";
  gameInfo.appendChild(finishGameButton);

  finishGameButton.addEventListener("click", function () {
    alert(`Гру завершено! Ваш виграш ${totalScore} грн.`);
    totalScore = 0;
    finishGame(gameBoard, gameInfo, gameResult, gameHelp);
  });
});
