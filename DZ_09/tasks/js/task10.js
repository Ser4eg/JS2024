/*Задача 10.
Дано масив цін у грн. 
Податок складає 20%. 
Сформувати масив, який буде містити величину сплаченого податку у грн.
*/

function getRandomNumber(min = 100, max = 500) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getNewArray(length = 10) {
  const array = new Array(length);

  for (let i = 0; i < length; i++) {
    array[i] = getRandomNumber();
  }

  return array;
}

function getProductsPriceTax(array, tax = 20) {
  const newArray = array.map((price) => ((price * tax) / 100).toFixed(2));
  return newArray;
}

if (confirm("Почати тестування?")) {
  const elementsNumber = parseInt(prompt("Вкажіть кількість елементів", "5"));
  const array = getNewArray(elementsNumber);
  alert(
    `Дано масив: ${array}. Податок складає 20%.\nНовий масив, який містить величину сплаченого податку у грн: ${getProductsPriceTax(
      array
    )}`
  );
}
