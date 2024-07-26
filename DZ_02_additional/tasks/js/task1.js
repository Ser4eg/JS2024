/*
Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку.
Визначити ширину елементів, які повинні бути відображені у цьому рядку. 
*/
const button = document.getElementById("calculateButton");

button.addEventListener("click", function () {
  // Отримання введених значень
  let screenWidth = parseFloat(document.getElementById("screenWidth").value);
  let numElements = parseInt(document.getElementById("numElements").value);

  // Перевірка на коректність введених даних
  if (
    isNaN(screenWidth) ||
    isNaN(numElements) ||
    screenWidth <= 0 ||
    numElements <= 0
  ) {
    document.getElementById("result").innerHTML =
      "<p>Будь ласка, введіть коректні дані.</p>";
    return;
  }

  // Обчислення ширини елементів
  let elementWidth = screenWidth / numElements;

  // Виведення результату
  document.getElementById("result").innerHTML =
    "<p>Ширина кожного елемента: " + elementWidth.toFixed(2) + " пікселів</p>";
});
