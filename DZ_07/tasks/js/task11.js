/*Задача 11. 
Дано покази температур (довільна кількість). 
Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури
*/
// find the mean value for the positive temperature readings
function findMeanValuePositiveTemperatures(temperatures) {
  let positiveCount = 0;
  let sumPositiveTeperatures = 0;
  let meanValueTemperatures = 0;

  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > 0) {
      positiveCount++;
      sumPositiveTeperatures += temperatures[i];
    }
  }

  meanValueTemperatures = sumPositiveTeperatures / positiveCount
  return meanValueTemperatures;
}

let temperatures = [];
let isContinue = false;

do {
  let temperatureValue = parseFloat(prompt("Вкажіть температуру:", "10"));
  temperatures.push(temperatureValue);
  isContinue = confirm("Продовжити вносити покази?");
} while (isContinue === true);

alert(
  `Cереднє значення для додатних показів температури: ${findMeanValuePositiveTemperatures(
    temperatures
  )}`
);
