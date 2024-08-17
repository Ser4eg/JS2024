/*Задача 3. 
Користувач вводить кількість елементів. 
Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
*/

function getNewArray(length = 2, firstValue = 1, secondValue = 7) {
  const array = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i < 5) {
      array[i] = firstValue;
    } else {
      array[i] = secondValue;
    }
  }

  return array;
}

if (confirm("Почати тестування?")) {
  const elementsNumber = parseInt(prompt("Вкажіть кількість елементів", "15"));
  alert(
    `Створено масив з ${elementsNumber} елементами: ${getNewArray(
      elementsNumber
    )}`
  );
}
