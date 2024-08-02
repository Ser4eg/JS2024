/*Задача 19.
Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. 
Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
*/

let weeks = parseInt(prompt("Вкажіть кількість тижнів", "1"));
let totalProfit = 0;
let weeksTotalProfit = [];
let result = "";

for (let week = 1; week <= weeks; week++) {
  let weekProfit = 0;

  for (let day = 1; day <= 7; day++) {
    let dayProfit = parseFloat(
      prompt(`Введіть прибуток за день ${day} тижня ${week}: `)
    );
    weekProfit += dayProfit;
  }

  weeksTotalProfit.push(weekProfit);
  totalProfit += weekProfit;
}

for (let i = 0; i < weeksTotalProfit.length; i++) {
  result += `Прибуток за тиждень ${i + 1}: ${weeksTotalProfit[i]}`;
}

document.write(`Загальний прибуток: ${totalProfit}. ${result}`);
