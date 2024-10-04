/*Задача 6. 
Користувач задає кількість оцінок і натискає на кнопку «get table». 
В результаті формується таблиця з input, куди користувач вводить оцінки. 
Після цього натискає на кнопку “get sum” і знаходить середнє значення.
*/

function createTable() {
  const numGrades = parseInt(document.getElementById("numGrades").value);
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = "";

  if (isNaN(numGrades) || numGrades < 1) {
    alert("Будь ласка, введіть коректну кількість оцінок.");
    return;
  }

  const table = document.createElement("table");
  for (let i = 0; i < numGrades; i++) {
    const row = table.insertRow();

    const labelCell = row.insertCell();
    labelCell.textContent = `Оцінка ${i + 1}`;

    const inputCell = row.insertCell();
    const input = document.createElement("input");
    input.type = "number";
    input.className = "grade-input";
    input.placeholder = `Введіть оцінку`;
    inputCell.appendChild(input);
  }

  tableContainer.appendChild(table);

  document.getElementById("getSumButton").style.display = "block";
}

function calculateAverage() {
  const gradeInputs = document.querySelectorAll(".grade-input");
  let sum = 0;
  let count = 0;

  gradeInputs.forEach((input) => {
    const grade = parseFloat(input.value);
    if (!isNaN(grade)) {
      sum += grade;
      count++;
    }
  });

  if (count === 0) {
    alert("Будь ласка, введіть принаймні одну оцінку.");
    return;
  }

  const average = sum / count;
  document.getElementById(
    "averageResult"
  ).innerText = `Середнє значення: ${average.toFixed(2)}`;
}
