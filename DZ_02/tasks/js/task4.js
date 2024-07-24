// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів

// Вхідні дані
let lengthCentimeters = parseInt(prompt('Вкажіть довжину у сантиметрах:', '10'))

// обчислення
const lengthMeters = lengthCentimeters / 100;
const lengthKilometers = lengthCentimeters / 100000;

// вивід результату
document.write(`
  <h1>Результат обчислення:</h1>
  <table border="2px">
    <tr>
      <th>Довжина у сантиметрах</th>
      <td>${lengthCentimeters}</td>
    </tr>
    <tr>
      <th>Довжина у метрах</th>
      <td>${lengthMeters}</td>
    </tr>
    <tr>
      <th>Довжина у кілометрах</th>
      <td>${lengthKilometers}</td>
    </tr>
  </table>
`);
