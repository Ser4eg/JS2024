/*Задача 9.
Морський бій. 
Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. 
Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці 
(якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель.) 
Користувач вводить номер клітинки, куди стріляє. 
Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.
*/

function randomShipPosition(shipsNumber = 1, gameSize = 5) {
  const shipsPosition = new Array(gameSize).fill(0);

  for (let i = 0; i < shipsNumber; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * shipsPosition.length);
    } while (shipsPosition[randomIndex] === 1);

    shipsPosition[randomIndex] = 1;
  }

  return shipsPosition;
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
  let gameSize = parseInt(document.getElementById("box").value);
  let shipsNumber = parseInt(document.getElementById("ship").value);

  if (shipsNumber > gameSize) {
    alert(
      `Кораблів більше ніж клітинок! Програма автоматично додасть ще клітинок`
    );
    gameSize = shipsNumber + 5;
  }

  const shipsPosition = randomShipPosition(shipsNumber, gameSize);

  let gameBoard = document.querySelector(".game-board");
  gameBoard.innerHTML = "";
  gameInfo.innerHTML = "";

  for (let i = 0; i < shipsPosition.length; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.innerText = "?";

    cell.addEventListener(
      "click",
      function (event) {
        let boxIndex = parseInt(event.target.dataset.index);
        cell.innerText = shipsPosition[boxIndex];

        if (shipsPosition[boxIndex] > 0) {
          event.target.classList.add("win");
          shipsNumber--;
          gameResult.innerText = `Вітаю! Ви вразили корабель! Залишилось ще ${shipsNumber} кораблів`;
        } else {
          event.target.classList.add("lose");
          gameResult.innerText = `Упс! Ви не вразили корабель. Залишилось ще ${shipsNumber} кораблів`;
        }

        if (shipsNumber === 0) {
          alert("Гру завершено! Ви вразили усі кораблі");
          finishGame(gameBoard, gameInfo, gameResult, gameHelp);
        }
      },
      { once: true }
    );

    gameBoard.appendChild(cell);
  }
});
