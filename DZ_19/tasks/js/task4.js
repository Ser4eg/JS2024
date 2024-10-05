/*Задача 4. 
Дано 3 таблиці розмірності 3*3 з випадковими числами. 
Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка 
(спробуйте додати можливість відображення кількості кліків біля назви таблиці 
з використанням відповідно доданого для цього атрибута).
*/
window.onload = () => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createTable(table, numRows, numCols) {
    for (let i = 0; i < numRows; i++) {
      const row = table.insertRow();
      for (let j = 0; j < numCols; j++) {
        const cell = row.insertCell();
        cell.textContent = getRandomNumber(1, 100);
      }
    }
  }

  function createTables(numRows, numCols) {
    const container = document.getElementById("tablesContainer");
    container.innerHTML = "";

    for (let i = 1; i <= 3; i++) {
      const tableContainer = document.createElement("div");
      tableContainer.className = "table-container";

      const tableTitle = document.createElement("h3");
      tableTitle.innerHTML = `Таблиця ${i} (Кількість кліків: <span data-table="${i}" class="click-count">0</span>)`;
      tableContainer.appendChild(tableTitle);

      const table = document.createElement("table");
      table.className = "random-table";
      table.setAttribute("data-table", i);
      createTable(table, numRows, numCols);
      tableContainer.appendChild(table);

      container.appendChild(tableContainer);
    }

    addTableClickHandlers();
  }

  function addTableClickHandlers() {
    const tables = document.querySelectorAll(".random-table");

    tables.forEach((table) => {
      table.addEventListener("click", (event) => {
        tables.forEach((tbl) => tbl.classList.remove("highlight"));

        table.classList.add("highlight");

        const tableId = table.getAttribute("data-table");

        const clickCountSpan = document.querySelector(
          `span[data-table="${tableId}"]`
        );
        let clickCount = parseInt(clickCountSpan.textContent);
        clickCount++;
        clickCountSpan.textContent = clickCount;
      });
    });
  }

  if (confirm("Почати тестування?")) {
    document
      .getElementById("createTablesButton")
      .addEventListener("click", () => {
        const numRows = parseInt(document.getElementById("numRows").value);
        const numCols = parseInt(document.getElementById("numCols").value);
        createTables(numRows, numCols);
      });

    createTables(3, 3);
  }
};
