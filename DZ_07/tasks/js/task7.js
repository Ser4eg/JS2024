/*Задача 7.
Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
*/

function createTable(rows = 1, cols = 1, message = "Hello") {
  let table = `<table border="2px"><tbody>`;

  for (let i = 0; i < rows; i++) {
    table += `<tr>`;

    for (let j = 0; j < cols; j++) {
      table += `<td>${message}</td>`;
    }

    table += `</tr>`;
  }

  table += `</tbody></table>`;

  return table;
}

const rows = parseInt(prompt("Вкажіть кількість рядків", "1"));
const cols = parseInt(prompt("Вкажіть кількість стовпців", "1"));
const message = prompt("Вкажіть текст для комірки", "Hello");

document.write(
  `<h1>Створено таблицю:</h1> ${createTable(rows, cols, message)}`
);
