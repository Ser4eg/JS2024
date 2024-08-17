/*Задача 4. 
Дано масив елементів. 
Вивести на екран елементи, що більші за 100
*/

function getRandomNumber(min = 50, max = 120) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getNewArray(length = 10) {
  const array = new Array(length);

  for (let i = 0; i < length; i++) {
    array[i] = getRandomNumber();
  }

  return array;
}

function getElementsMoreThan(array, value = 100) {
  const newArray = [];
  for (const element of array) {
    if (element > 100) {
      newArray.push(element);
    }
  }
  return newArray;
}

if (confirm("Почати тестування?")) {
  const elementsNumber = parseInt(prompt("Вкажіть кількість елементів", "10"));
  const array = getNewArray(elementsNumber)
  alert(`Дано масив: ${array}.\nЕлементи які більше за 100: ${getElementsMoreThan(array)}`);
}
