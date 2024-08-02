/*Задача 11. 
Користувач загадує число. 
За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).
*/

// Запитуємо у користувача загадане число
let userNumber = parseInt(prompt("Загадайте число від 1 до 10"));

// ЦИКЛ FOR======================================================================
for (let step = 1; step <= 3; step++) {
  let computerNumber = Math.floor(Math.random() * 10) + 1;
  let isCorrectNumber = confirm(
    `Спроба №${step}: Ви загадали число ${computerNumber}?`
  );

  if (isCorrectNumber) {
    alert(`Комп'ютер вгадав ваше число ${userNumber} з ${step}-ої спроби!`);
    break;
  }
  if (step === 3 && !isCorrectNumber) {
    alert("Комп'ютер не зміг вгадати ваше число за 3 спроби.");
  }
}

// ЦИКЛ WHILE====================================================================
// let step = 1;
// let isCorrectNumber = false;

// while (step <= 3 && !isCorrectNumber) {
//   let computerNumber = Math.floor(Math.random() * 10) + 1;

//   isCorrectNumber = confirm(
//     `Спроба №${step}: Ви загадали число ${computerNumber}?`
//   );

//   if (isCorrectNumber) {
//     alert(`Комп'ютер вгадав ваше число ${userNumber} з ${step}-ої спроби!`);
//   }

//   step++;
// }

// if (!isCorrectNumber) {
//   alert("Комп'ютер не зміг вгадати ваше число за 3 спроби.");
// }
