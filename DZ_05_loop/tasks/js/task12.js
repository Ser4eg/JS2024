/*Задача 12. 
Користувач загадує число. 
Комп’ютер задає питання поки не вгадає число користувача (використати confirm).
*/

// Запитуємо у користувача загадане число
let userNumber = parseInt(prompt("Загадайте число від 1 до 10"));

// ЦИКЛ WHILE====================================================================
let step = 1;
let isCorrectNumber = false;

while (!isCorrectNumber) {
  let computerNumber = Math.floor(Math.random() * 10) + 1;

  isCorrectNumber = confirm(
    `Спроба №${step}: Ви загадали число ${computerNumber}?`
  );
  // console.log(isCorrectNumber);

  if (isCorrectNumber) {
    alert(`Комп'ютер вгадав ваше число ${userNumber} з ${step}-ої спроби!`);
    break;
  }

  step++;
}
