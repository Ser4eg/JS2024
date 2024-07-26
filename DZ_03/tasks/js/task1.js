/*Задача 1. 
З клавіатури вводяться імена двох дітей та кількість у них цукерок.
Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
*/

// отримуєм дані
let firstChildName = prompt("Введіть ім’я першої дитини:", "Мілана");
let firstChildCandyNumber = parseInt(
  prompt("Введіть кількість цукерок у першої дитини:", "1")
);
let secondChildName = prompt("Введіть ім’я другої дитини:", "Софія");
let secondChildCandyNumber = parseInt(
  prompt("Введіть кількість цукерок у другої дитини:", "2")
);

let result = "";

// розрахунок
if (firstChildCandyNumber > secondChildCandyNumber) {
  result = "Кількість цукерок більша у " + firstChildName;
} else if (firstChildCandyNumber < secondChildCandyNumber) {
  result = "Кількість цукерок більша у " + secondChildName;
} else {
  result = "Кількість цукерок однакова";
}

// вивід результату
document.write(`
  <h1>Результат обчислення:</h1>
  <p>${result}</p>
`);
