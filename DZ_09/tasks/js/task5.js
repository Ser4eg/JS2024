/*Задача 5. 
Дано масив елементів. 
Знайти добуток додатних елементів
*/

function getRandomNumber(min = -50, max = 50) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getNewArray(length = 10) {
  const array = new Array(length);

  for (let i = 0; i < length; i++) {
    array[i] = getRandomNumber();
  }

  return array;
}

function getMultiplicationPositiveElements(array) {
  let result = 1;

  for (const element of array) {
    if (element > 0) {
      result *= element;
    }
  }

  return result;
}

if (confirm("Почати тестування?")) {
  const elementsNumber = parseInt(prompt("Вкажіть кількість елементів", "5"));
  const array = getNewArray(elementsNumber);
  alert(
    `Дано масив: ${array}.\nДобуток додатних елементів: ${getMultiplicationPositiveElements(
      array
    )}`
  );
}
