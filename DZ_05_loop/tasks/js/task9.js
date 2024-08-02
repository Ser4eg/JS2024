/*Задача 9.
Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
*/

const rowCount = 3;
const colCount = 3;
const tableCount = 3;
let cellNumber = 1;
let result = "";

for (let tableNum = 1; tableNum <= tableCount; tableNum++) {
  result += `<table border="2px"><tbody>`;

  for (let rowNum = 1; rowNum <= rowCount; rowNum++) {
    result += `<tr>`;

    for (let colNum = 1; colNum <= colCount; colNum++) {
      result += `<td>${cellNumber}</td>`;
      cellNumber++;
    }
    
    result += `</tr>`;
  }

  result += `</tbody></table>`;
}

document.write(`<div style="display: flex; gap: 40px;">${result}</div>`);
