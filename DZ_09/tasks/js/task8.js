/*Задача 8.
Дано масив номерів авто. 
Сформувати новий масив тих, які починаються на «А»
*/
function getCarsWithFirstLetter(carNumbers, currentLetter = "A") {
  const array = carNumbers.filter((number) => number.startsWith(currentLetter));

  return array;
}

const carNumbers = ["AE1111CI", "BC111", "B111B", "A22", "AE1111CA"];

if (confirm("Почати тестування?")) {
  alert(
    `Дано масив номерів авто: ${carNumbers}.\nНовий масив машин, номера яких починаються на «А»: ${getCarsWithFirstLetter(
      carNumbers
    )}`
  );
}
