/*Задача 5. 
Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: 
кількість парних, 
кількість додатних, 
кількість більших за 100.
*/

function analysisNumbers(num1 = 0, num2 = 0, num3 = 0) {
  let evenNumbersCount = 0;
  let positiveNumbersCount = 0;
  let greaterHundredNumbersCount = 0;

  // шукаєм кількість парних чисел
  const isEvenNumber = (num) => (num % 2 === 0 ? true : false);

  if (isEvenNumber(num1)) {
    evenNumbersCount++;
  }
  if (isEvenNumber(num2)) {
    evenNumbersCount++;
  }
  if (isEvenNumber(num3)) {
    evenNumbersCount++;
  }

  // шукаєм кількість додатних чисел
  const isPositiveNumber = (num) => (num > 0 ? true : false);

  if (isPositiveNumber(num1)) {
    positiveNumbersCount++;
  }
  if (isPositiveNumber(num2)) {
    positiveNumbersCount++;
  }
  if (isPositiveNumber(num3)) {
    positiveNumbersCount++;
  }

  // шукаєм кількість чисел більших за 100
  const isGreaterHundredNumber = (num) => (num > 100 ? true : false);

  if (isGreaterHundredNumber(num1)) {
    greaterHundredNumbersCount++;
  }
  if (isGreaterHundredNumber(num2)) {
    greaterHundredNumbersCount++;
  }
  if (isGreaterHundredNumber(num3)) {
    greaterHundredNumbersCount++;
  }

  return {
    evenNumbersCount,
    positiveNumbersCount,
    greaterHundredNumbersCount,
  };
}

let num1 = parseFloat(prompt("Вкажіть перше число:", "140"));
let num2 = parseFloat(prompt("Вкажіть друге число:", "-50"));
let num3 = parseFloat(prompt("Вкажіть третє число:", "55.7"));

let result = analysisNumbers(num1, num2, num3);
document.write(`
    Введені числа: ${num1},${num2},${num3}<hr>
    Кількість парних чисел: ${result.evenNumbersCount}<br>
    Кількість додатних чисел: ${result.positiveNumbersCount}<br>
    Кількість більших за 100: ${result.greaterHundredNumbersCount}<br>
`);
