/*Задача 2. 
Вивести на екран усі двоцифрові числа, у яких перша цифра є більшою або рівною за другу.
*/
let result = "";

for (let number = 10; number <= 99; number++) {
  let firstDigit = Math.floor(number / 10);
  let secondDigit = number % 10;

  if (firstDigit >= secondDigit) {
    result += number + " ";
  }
}

document.write(`Результат: ${result}`);
