/*Задача 4. 
Вивести з використанням циклів маркований список з випадковими числами (1-100).
Кількість випадкових чисел вводиться користувачем.
*/

// отримуєм кількість випадкових чисел
const userNumberCount = parseInt(prompt("Введіть кількість випадкових чисел:"));
let result = "";

for (let i = 1; i <= userNumberCount; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  result += `<li>Випадкове число ${i}: ${randomNumber}</li>`;
}

document.write(`<ul>${result}</ul>`);