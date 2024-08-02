/*Задача 8.
Вивести таблицю 3*3
*/

const rowCount = 3;
const colCount = 3;
let cellNumber = 1;
let result = "";

for (let i = 1; i <= rowCount; i++) {
  result += `<tr>`;
  for (let j = 1; j <= colCount; j++) {    
    result += `<td>${cellNumber}</td>`;
    cellNumber++;
  }
  result += `</tr>`;
}

document.write(`<table border="2px"><tbody>${result}</tbody></table>`);
