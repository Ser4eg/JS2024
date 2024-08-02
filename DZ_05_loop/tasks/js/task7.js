/*Задача 6.
Вивести таблицю з 3 рядків і 7 стовпців
*/

const rowCount = 3;
const colCount = 7;
let result = "";

for (let i = 1; i <= rowCount; i++) {
  result += `<tr>`;
  for (let j = 1; j <= colCount; j++) {
    result += `<td>${j}</td>`;
  }
  result += `</tr>`;
}

document.write(`<table border="2px"><tbody>${result}</tbody></table>`);