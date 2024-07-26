/*Задача 6.
З клавіатури вводиться номер дня тижня.
Вивести на екран назву дня.
*/

// отримуєм дані
let dayNumber = parseInt(prompt("Введіть номер дня тижня від 1 до 7:", "1"));

// алгоритм
if (dayNumber >= 1 && dayNumber <= 7) {
  if (dayNumber === 1) alert(`Номер дня ${dayNumber} - Понеділок`);
  if (dayNumber === 2) alert(`Номер дня ${dayNumber} - Вівторок`);
  if (dayNumber === 3) alert(`Номер дня ${dayNumber} - Середа`);
  if (dayNumber === 4) alert(`Номер дня ${dayNumber} - Четвер`);
  if (dayNumber === 5) alert(`Номер дня ${dayNumber} - П'ятниця`);
  if (dayNumber === 6) alert(`Номер дня ${dayNumber} - Субота`);
  if (dayNumber === 7) alert(`Номер дня ${dayNumber} - Неділя`);
} else alert("Не вірно вказаний номер дня!");
