/*Задача 5. 
Написати програму, що виводить на екран таблицю множення на k (k вводиться з клавіатури).
*/

let userNumber = parseInt(prompt('Введіть число для таблиці множення:'));
let result = ''

for (let i = 1; i <= 10; i++) {
  result+= (`${userNumber} * ${i} = ${userNumber * i}<br>`);
}

document.write(`Таблиця множення на ${userNumber}:<br> ${result}`);