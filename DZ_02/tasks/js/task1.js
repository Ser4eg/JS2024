// отримуєм дані
let num1 = parseFloat(prompt("Введіть перше дійсне число:", "1"));
let num2 = parseFloat(prompt("Введіть друге дійсне число", "2"));

// розрахунок
let sum = num1 + num2;
let mult = num1 * num2;
let div = num1 / num2;

// вивід результату
document.write(`
  <h1>Результат обчислення значення виразів у таблиці</h1>
  <table border="2px">
    <tr>
      <th>Переше число: ${num1}</th>
      <th>Друге число: ${num2}</th>
    </tr>
    <tr>
      <th>Шуканий результат</th>
      <th>Отримане значення</th>
    </tr>
    <tr>
      <th>Сума</th>
      <td>${sum}</td>
    </tr>
    <tr>
      <th>Добуток</th>
      <td>${mult}</td>
    </tr>
    <tr>
      <th>Частка</th>
      <td>${div}</td>
    </tr>
  </table>
`);
