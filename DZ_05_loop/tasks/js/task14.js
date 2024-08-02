/*Задача 14.
Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.
*/

let userStartNumber = parseInt(prompt("Введіть початкове число:"));
let userEndNumber = parseInt(prompt("Введіть кінцеве число:"));

let numberCount = 0;
let sum = 0;
let result = "";

if (userStartNumber > userEndNumber) {
  let tempNum = userStartNumber;
  userStartNumber = userEndNumber;
  userEndNumber = tempNum;
}

for (let i = userStartNumber; i <= userEndNumber; i++) {
  if (i % 2 !== 0) {
    sum += i;    
    numberCount++;
    numberCount !== 5 ? (result += `${i}+`) : (result += `${i}`);
  }
  if (numberCount === 5) break;
}

document.write(
  `<h1>Сума перших 5 непарних чисел між ${userStartNumber} та ${userEndNumber} дорівнює ${sum}. Наведений результат: ${result}</h1>`
);
