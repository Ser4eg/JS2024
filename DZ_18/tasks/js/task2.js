/*Задача 2. 
Зробити конвертер валют (курси валют – константи у скрипті)
*/

const RATE_EURO = 50;
const RATE_USD = 40;

function convertCurrency() {
  const uahAmount = parseFloat(document.getElementById("uahAmount").value);

  const euroAmount = (uahAmount / RATE_EURO).toFixed(2);
  const usdAmount = (uahAmount / RATE_USD).toFixed(2);

  document.getElementById("euroAmount").value = euroAmount;
  document.getElementById("usdAmount").value = usdAmount;
}
