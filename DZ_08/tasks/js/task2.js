/*Задача 2. 
Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. 
Вивести на екран:
номери днів, протягом яких кількість відвідувачів була меншою за 20;
номери днів, коли кількість відвідувачів була мінімальною;
номери днів, коли кількість відвідувачів була мінімальною;
загальну кількість клієнтів у робочі дні
 та окремо загальну кількість днів на вихідних.
*/

function getDaysWithCondition(storeVisitors) {
  const days = [];
  for (let i = 0; i < storeVisitors.length; i++) {
    if (storeVisitors[i] < 20) {
      days.push(i + 1);
    }
  }
  return days;
}

function getDaysWithMinVisitors(storeVisitors) {
  const minVisitors = Math.min(...storeVisitors);
  const days = [];
  for (let i = 0; i < storeVisitors.length; i++) {
    if (storeVisitors[i] === minVisitors) {
      days.push(i + 1);
    }
  }
  return days;
}

function getDaysWithMaxVisitors(storeVisitors) {
  const maxVisitors = Math.max(...storeVisitors);
  const days = [];
  for (let i = 0; i < storeVisitors.length; i++) {
    if (storeVisitors[i] === maxVisitors) {
      days.push(i + 1);
    }
  }
  return days;
}

function getStoreVisitorsInWorkDays(storeVisitors) {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    total += storeVisitors[i];
  }
  return total;
}

function getStoreVisitorsInWeekend(storeVisitors) {
  let total = 0;
  for (let i = 5; i < storeVisitors.length; i++) {
    total += storeVisitors[i];
  }
  return total;
}

let storeVisitors = [];
let day = 1;

do {
  let visitorsNumber = parseInt(
    prompt(`Вкажіть кількість відвідувачів у ${day} день`, "5")
  );
  storeVisitors.push(visitorsNumber);
  day++;
} while (day <= 7);

document.write(
  `
  Магазин мав таку кількість відвідувачів: ${storeVisitors}<br>
  Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${getDaysWithCondition(
    storeVisitors
  )}<br>
  Номери днів, коли кількість відвідувачів була мінімальною: ${getDaysWithMinVisitors(
    storeVisitors
  )}<br>
  Номери днів, коли кількість відвідувачів була максимальною: ${getDaysWithMaxVisitors(
    storeVisitors
  )}<br>
  Загальна кількість клієнтів у робочі дні: ${getStoreVisitorsInWorkDays(
    storeVisitors
  )}<br>
  Загальна кількість клієнтів на вихідних: ${getStoreVisitorsInWeekend(
    storeVisitors
  )}<br>`
);
