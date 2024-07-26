/*Задача 7.
З клавіатури вводиться номер місяця.
Вивести до якої пори він відноситься.
*/

// отримуєм дані
let monthNumber = parseInt(prompt("Введіть номер місяця від 1 до 12:", "1"));

// алгоритм
if (monthNumber >= 1 && monthNumber <= 12) {
  if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12)
    alert(`Номер місяця ${monthNumber} - Зима`);
  if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5)
    alert(`Номер місяця ${monthNumber} - Весна`);
  if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8)
    alert(`Номер місяця ${monthNumber} - Літо`);
  if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11)
    alert(`Номер місяця ${monthNumber} - Осінь`);
} else alert("Не вірно вказаний номер місяця!");
