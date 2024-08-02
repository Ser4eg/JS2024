/*Задача 15.
Ігровий автомат. 
Випадково вибираємо зображення у 3 позиціях. 
Вибір у кожній позиції вибирається як одне з чотирьох зображень. 
Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). 
Використати цикли і switch (для вибору зображення за номером).
*/
const gameButton = document.querySelector(".game__button");
const gameItems = document.querySelectorAll(".game-zone__item");
const gameResult = document.querySelector(".game__result");

gameButton.addEventListener("click", function () {
  alert("Ви запустили гру! Генеруємо результат");

  // генерація випадкових зображень для трьох позицій
  let firstImageRandomNumber = Math.floor(Math.random() * 4) + 1;
  let secondImageRandomNumber = Math.floor(Math.random() * 4) + 1;
  let thirdImageRandomNumber = Math.floor(Math.random() * 4) + 1;

  // виводимо отримані зображення в ігрову зону
  for (let i = 1; i <= 3; i++) {
    let image;
    // для кожної позиції прописуєм згенерований випадковий номер потрібної картинки
    switch (i) {
      case 1:
        image = firstImageRandomNumber;
        break;
      case 2:
        image = secondImageRandomNumber;
        break;
      case 3:
        image = thirdImageRandomNumber;
        break;
    }

    // створюємо елемент для картинки
    let imageTag = document.createElement("span");
    // обираємо потрібну картинку за номером який був згенерован
    switch (image) {
      case 1:
        imageTag.innerHTML = "#";
        break;
      case 2:
        imageTag.innerHTML = "@";
        break;
      case 3:
        imageTag.innerHTML = "$";
        break;
      case 4:
        imageTag.innerHTML = "7";
        break;
    }
    // прибираємо ісходні дані і записуєм нові для кожної позиції
    gameItems[i - 1].innerHTML = "";
    gameItems[i - 1].appendChild(imageTag);
  }

  // алгоритм визначання виграшу
  let prize = 0;
  if (
    firstImageRandomNumber === secondImageRandomNumber &&
    secondImageRandomNumber === thirdImageRandomNumber
  ) {
    switch (firstImageRandomNumber) {
      // три перших зображення 100 грн
      case 1:
        prize = 100;
        break;
      // три других – 200
      case 2:
        prize = 200;
        break;
      // три третіх – 500
      case 3:
        prize = 500;
        break;
      // три четвертих зображення – 1000грн
      case 4:
        prize = 1000;
        break;
    }
  }

  // виводимо виграш
  if (prize > 0) {
    gameResult.textContent = `Ви виграли ${prize} грн!`;
  } else {
    gameResult.textContent = "Ви нічого не виграли.";
  }
});
