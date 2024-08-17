/*Задача 1. 
Користувач вводить кількість елементів. 
Створити масив, що складається з вказаної кількості елементів заповнених нулями.
*/

function getNewArray(length = 1, defaultValue = 0) {
  const array = new Array(length).fill(defaultValue);
  return array;
}

if (confirm("Почати тестування?")) {
  const elementsNumber = parseInt(prompt("Вкажіть кількість елементів", "5"));
  alert(
    `Створено масив з ${elementsNumber} елементами: ${getNewArray(
      elementsNumber
    )}`
  );
}
