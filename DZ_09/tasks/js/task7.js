/*Задача 7.
Дано масив цін. 
Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
*/

function getRandomNumber(min = 900, max = 1300) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getNewArray(length = 10) {
  const array = new Array(length);

  for (let i = 0; i < length; i++) {
    array[i] = getRandomNumber();
  }

  return array;
}

function getProductsDiscount(array, defaultPrice = 1000, discount = 30) {
  const newArray = array.map((price) => {
    return price > defaultPrice ? (price * (1 - discount / 100)).toFixed(2) : price;
  });

  return newArray;
}

if (confirm("Почати тестування?")) {
  const elementsNumber = parseInt(prompt("Вкажіть кількість елементів", "5"));
  const array = getNewArray(elementsNumber);
  alert(
    `Дано масив: ${array}.\nНовий масив зі знижкою 30% для цін більше за 1000 грн: ${getProductsDiscount(
      array
    )}`
  );
}
