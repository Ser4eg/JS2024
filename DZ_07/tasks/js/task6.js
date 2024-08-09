/*Задача 6.
Створити окремі функції, які переводять:
Сантиметри у дюйми;
Кілограми у фунти;
Кілометри у милі.
*/

// Сантиметри у дюйми
function centimetersToInches(cm) {
  const inches = cm / 2.54;
  return inches;
}

// Кілограми у фунти
function kilogramsToPounds(kg) {
  const pounds = kg * 2.20462;
  return pounds;
}

// Кілометри у милі
function kilometersToMiles(km) {
  const miles = km * 0.621371;
  return miles;
}

const centimeters = parseFloat(prompt('Вкажіть кількість сантиметрів','10'))
const kilograms = parseFloat(prompt('Вкажіть кількість кілограмів','10'))
const kilometers = parseFloat(prompt('Вкажіть кількість кілоиетрів','10'))

document.write(`
  <table border="2px">
  <tr>
  <td>${centimeters} сантиметрів це</td>
  <td>${centimetersToInches(centimeters).toFixed(2)} дюймів</td>
  </tr>
  <tr>
  <td>${kilograms} кілограмів це</td>
  <td>${kilogramsToPounds(kilograms).toFixed(2)} фунтів</td>
  </tr>
  <tr>
  <td>${kilometers} кілометрів це</td>
  <td>${kilometersToMiles(kilometers).toFixed(2)} миль</td>
  </tr>
  </table>
`)


