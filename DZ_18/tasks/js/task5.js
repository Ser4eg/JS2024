/*Задача 5. 
Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)
*/

function createRandomTable(rows, cols) {
  const table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = Math.floor(Math.random() * 100);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  return table;
}

function insertTable() {
  const tableContainer = document.getElementById("tableContainer");
  const table = createRandomTable(3, 4);
  tableContainer.appendChild(table);
}

window.onload = insertTable;
