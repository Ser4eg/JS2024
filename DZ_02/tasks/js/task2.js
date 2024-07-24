// отримуєм дані
let birthYear = parseInt(prompt('Вкажіть рік народження у форматі "РРРР":', '1987'));
const currentYear = new Date().getFullYear();

// обчислення
let age = currentYear - birthYear;

// вивід результату
document.write(`
  <h1>Результат обчислення:</h1>
  <table border="2px">
    <tr>
      <th>Рік народження: ${birthYear}</th>
      <th>Поточний рік: ${currentYear}</th>
    </tr>
    <tr>
      <th>Кількість років</th>
      <td>${age}</td>
    </tr>
  </table>
`);
