// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

// Вхідні дані
let secondsQuantity = parseInt(prompt("Вкажіть кількість секунд:", "3805"));

// обчислення
const hours = Math.floor(secondsQuantity / 3600);
const minutes = Math.floor((secondsQuantity % 3600) / 60);
const seconds = secondsQuantity % 60;

// вивід результату
document.write(`
  <h1>Результат обчислення:</h1>
  <table border="2px">
    <tr>
      <th>Кількість секунд</th>
      <td>${secondsQuantity}</td>
    </tr>
    <tr>
      <th>Кількість годин</th>
      <td>${hours}</td>
    </tr>
    <tr>
      <th>Кількість хвилин</th>
      <td>${minutes}</td>
    </tr>
    <tr>
      <th>Час у форматі "Г:Х:С"</th>
      <td>${hours}:${minutes}:${seconds}</td>
    </tr>
  </table>
`);
