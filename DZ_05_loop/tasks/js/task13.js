/*Задача 13.
Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.
*/
let userStartNumber = parseInt(prompt("Введіть початкове число:"));
let userEndNumber = parseInt(prompt("Введіть кінцеве число:"));

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
    i !== userEndNumber ? (result += `${i}+`) : (result += `${i}`);
  }
}

document.write(
  `<h1>Сума всіх непарних чисел між ${userStartNumber} та ${userEndNumber} дорівнює ${sum}. Наведений результат: ${result}</h1>`
);
