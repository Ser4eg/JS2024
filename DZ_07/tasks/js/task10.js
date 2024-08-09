/*Задача 10.
Дано покази температур (довільна кількість). 
Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.
*/

function getCountNegativeTemperatures(temperatures) {
  let negativeCount = 0;

  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] < 0) {
      negativeCount++;
    }
  }

  return negativeCount;
}

let temperatures = [];
let isContinue = false;

do {
  let temperatureValue = parseFloat(prompt("Вкажіть температуру:", "-10"));
  temperatures.push(temperatureValue);
  isContinue = confirm("Продовжити вносити покази?");
} while (isContinue === true);

alert(`Кількість від’ємних показів температури: ${getCountNegativeTemperatures(temperatures)}`)
