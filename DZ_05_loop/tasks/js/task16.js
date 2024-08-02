/*Задача 16.
Морський бій. 
Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. 
Маючи К снарядів користувач намагається потопити корабель.
*/
const gameButton = document.querySelector(".game__button");
const gameResult = document.querySelector(".game__result");
const gameHelp = document.querySelector(".game__help");

gameButton.addEventListener("click", function () {
  alert("Ви запустили гру! Генеруємо результат");

  const gameArea = document.querySelector(".game-zone__field");
  const gameSettingsRowNumber = parseInt(
    document.querySelector(".settings-game__item_row").value
  );
  // console.log(typeof gameSettingsRowNumber);
  const gameSettingsColNumber = parseInt(
    document.querySelector(".settings-game__item_col").value
  );

  //генеруєм рандомну позицію одиночного корабля
  const randomPositionX = Math.floor(Math.random() * gameSettingsRowNumber);
  const randomPositionY = Math.floor(Math.random() * gameSettingsColNumber);
  console.log(
    `Корабель розташован: Рядок-${randomPositionX}/Стовпець-${randomPositionY}`
  );

  gameResult.innerHTML = `Гру розпочато!`;
  gameHelp.innerHTML = `Підказка: Корабель розташован: Рядок-${randomPositionX}/Стовпець-${randomPositionY}</p>`;

  //створюємо шапку ігрового поля
  let thead = "<thead><tr><th></th>";
  for (let x = 0; x < gameSettingsColNumber; x++) {
    thead += `<th>${x}</th>`;
  }
  thead += "</tr></thead>";

  //створюємо ігрове поле
  let tbody = "";
  for (let x = 0; x < gameSettingsRowNumber; x++) {
    tbody += `<tr><th>${x}`;

    for (let y = 0; y < gameSettingsColNumber; y++) {
      tbody += `<td class="game-zone__field-item" data-positionX="${x}" data-positionY="${y}">?</td>`;
    }

    tbody += `</th></tr>`;
  }

  gameArea.innerHTML = "";
  gameArea.innerHTML = thead + tbody;

  const gameItems = document.querySelectorAll(".game-zone__field-item");
  let gameSettingsBulletsNumber = parseInt(
    document.querySelector(".settings-game__item_bullet").value
  );

  function handleClick(e) {
    if (gameSettingsBulletsNumber > 0) {
      gameSettingsBulletsNumber--; // Зменшуємо кількість снарядів
      gameHelp.innerHTML = `Залишилось пострілов ${gameSettingsBulletsNumber}.<p>Підказка: Корабель розташован: Рядок-${randomPositionX}/Стовпець-${randomPositionY}</p>`;
      const clickedCell = e.target;
      const posX = clickedCell.getAttribute("data-positionx");
      const posY = clickedCell.getAttribute("data-positiony");
      console.log(`Ви клікнули на клітинку з координатами X-${posX} Y-${posY}`);

      // Перевіряємо, чи співпадає позиція з позицією корабля
      if (
        parseInt(posX) === randomPositionX &&
        parseInt(posY) === randomPositionY
      ) {
        clickedCell.innerHTML = "X";
        alert("Ви потрапили в корабель!");
        gameResult.innerHTML = "Ви виграли!";
        clickedCell.classList.add("hit");
        gameItems.forEach((item) =>
          item.removeEventListener("click", handleClick)
        ); // Зупиняємо гру
      } else {
        clickedCell.innerHTML = "-";
        clickedCell.classList.add("miss");
        alert("Мимо!");
      }

      // Якщо снаряди закінчилися
      if (gameSettingsBulletsNumber === 0) {
        alert("Гру завершено. Закінчились снаряди. Ви програли!");
        gameResult.innerHTML =
          "Гру завершено. Закінчились снаряди. Ви програли!";
        gameItems.forEach((item) =>
          item.removeEventListener("click", handleClick)
        ); // Зупиняємо гру
      }
    }
  }

  // Додаємо обробник подій до всіх клітинок
  gameItems.forEach((element) => {
    element.addEventListener("click", handleClick);
  });
});
