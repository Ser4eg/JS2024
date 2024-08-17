/*Задача 6.
Дано масив елементів. 
Усі елементи, які більші за перший елемент помножити на 2
*/

function getRandomNumber(min = 10, max = 50) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getNewArray(length = 10) {
  const array = new Array(length);

  for (let i = 0; i < length; i++) {
    array[i] = getRandomNumber();
  }

  return array;
}

function getMultiplicationElements(array) {
  const firstElement = array[0]; 

  const newArray = array.map((element) => {   
    return element > firstElement ? element * 2 : element;
  });

  return newArray
}

if (confirm("Почати тестування?")) {
  const elementsNumber = parseInt(prompt("Вкажіть кількість елементів", "5"));
  const array = getNewArray(elementsNumber);
  alert(
    `Дано масив: ${array}.\nНовий масив з елементами, які більші за перший елемент помножені на 2: ${getMultiplicationElements(
      array
    )}`
  );
}
