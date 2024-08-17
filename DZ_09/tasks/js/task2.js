/*Задача 2. 
Користувач вводить кількість елементів. 
Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
*/

function getNewArray(length = 2, firstValue = 1, secondValue = 7) {
  const array = new Array(length);
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i++) {
    array[i] = firstValue;
  }

  for (let i = middle; i < length; i++) {
    array[i] = secondValue;
  }

  return array;
}

if (confirm("Почати тестування?")) {
  const elementsNumber = parseInt(prompt("Вкажіть кількість елементів", "6"));
  alert(
    `Створено масив з ${elementsNumber} елементами: ${getNewArray(
      elementsNumber
    )}`
  );
}
