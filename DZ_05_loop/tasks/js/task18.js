/*Задача 18.
Користувача поступово вводить показники температури протягом року. 
Знайти середню температуру.
*/

let totalSumTemp = 0;
let count = 0;
let result = ''
do {
  let userTemp = parseFloat(prompt(`Будь ласка, внесіть показник температири`));
  totalSumTemp += userTemp;
  count++;
  result += `${userTemp} +`
  isContinue = confirm("Продовжемо вводити наступні показники?");
} while (isContinue);
alert(
  `Дякуємо, ви внесли ${count} показників температури. Показник середньої температури склав ${(
    totalSumTemp / count
  ).toFixed(1)}. Були внесені показники: ${result}`
);
