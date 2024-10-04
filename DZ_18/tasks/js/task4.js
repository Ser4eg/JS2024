/*Задача 4. 
Наперед задано у скрипті масив зі списком бажань. 
Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)
*/
// Масив зі списком бажань
const wishes = [
  "Подорожувати світом",
  "Вивчити JS",
  "Купити новий автомобіль",
  "Знайти нову роботу",
  "Покращити свої навички програмування",
  "Почати займатися спортом",
  "Провести більше часу з родиною",
  "Прочитати 10 нових книг",
  "Знайти нове хобі",
  "Запустити власний проект",
];

function getRandomWishes(arr, count) {
  return arr.reduce((selected, _, index, original) => {
    if (selected.length === count) return selected;

    const randomIndex = Math.floor(Math.random() * original.length);

    if (!selected.includes(original[randomIndex])) {
      selected.push(original[randomIndex]);
    }

    return selected;
  }, []);
}

function displayRandomWishes() {
  const wishesContainer = document.getElementById("wishesContainer");
  const randomWishes = getRandomWishes(wishes, 3);

  randomWishes.forEach((wish) => {
    const wishDiv = document.createElement("div");
    wishDiv.className = "wish";
    wishDiv.textContent = wish;
    wishesContainer.appendChild(wishDiv);
  });
}

window.onload = displayRandomWishes;
