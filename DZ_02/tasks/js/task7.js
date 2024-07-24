/* Задача 7. 
Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
*/

// генеруємо випадковий номер місяця (від 1 до 12)
let month = Math.floor(Math.random() * 12) + 1;

// генеруємо випадковий номер дня (від 0 до 6)
let day = Math.floor(Math.random() * 7);

// обчислюємо суму
let sum = month + day;

// вивід результату
const result = `
  <h1>Результат обчислення:</h1>
  <table border="2px">
    <tr>
      <th>Випадковий номер місяця</th>
      <td>${month}</td>
    </tr>
    <tr>
      <th>Випадковий номер дня</th>
      <td>${day}</td>
    </tr>
    <tr>
      <th>Сума</th>
      <td>${sum}</td>
    </tr>    
  </table>
`;

document.write(result);