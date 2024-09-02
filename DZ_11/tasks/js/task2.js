/*Задача 2. 
Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
1) загальний прибуток кожного масиву за тиждень;
2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
3) загальний прибуток за робочі дні
4) загальний прибуток за вихідні дні
5) максимальний прибуток за середу
6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
7) відсортувати кожен тиждень за зростанням
8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
*/

function getRandomNumber(min = 100, max = 500) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getNewArray(length = 7) {
  return Array.from({ length }, () => getRandomNumber());
}

function getTwoDimensionalArray(rows = 4, cols = 7) {
  return Array.from({ length: rows }, () => getNewArray(cols));
}

// 1) загальний прибуток кожного масиву за тиждень;
function getTotalSumOfStoresProfit(array) {
  return array.map((store) => store.reduce((sum, price) => sum + price, 0));
}

// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
function getTotalProfitByDay(array) {
  const days = array[0].length;
  const totalProfits = Array(days).fill(0);

  for (const shopProfits of array) {
    for (let i = 0; i < days; i++) {
      totalProfits[i] += shopProfits[i];
    }
  }

  return totalProfits;
}

// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
function getTotalProfitOfWorksOrHolidayDays(array, worksDay = true) {
  if (worksDay) {
    return getTotalProfitByDay(array).slice(0, 5);
  } else {
    return getTotalProfitByDay(array).slice(5);
  }
}

// 5) максимальний прибуток за середу
function getMaxProfitByDay(array, dayIndex = 2) {
  let maxProfit = -Infinity;

  for (const shopProfits of array) {
    if (shopProfits[dayIndex] > maxProfit) {
      maxProfit = shopProfits[dayIndex];
    }
  }

  return maxProfit;
}

// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
function getPricesMoreThanCondition(array, conditionValue = 200) {
  return array.flat().filter((value) => value > conditionValue);
}

// 7) відсортувати кожен тиждень за зростанням
function sortPricesInWeek(array) {
  return array.map((week) => week.sort((a, b) => a - b));
}

// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

function sortWeeksByMaxElementDescending(array) {
  return array.sort((a, b) => Math.max(...b) - Math.max(...a));
}

// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
function sortWeeksBySumDescending(array) {
  return array.sort((a, b) => {
    const sumA = a.reduce((acc, val) => acc + val, 0);
    const sumB = b.reduce((acc, val) => acc + val, 0);
    return sumB - sumA;
  });
}

if (confirm("Почати тестування?")) {
  const storesNumber = parseInt(prompt("Вкажіть кількість магазинів", "4"));
  const storesListPrices = getTwoDimensionalArray(storesNumber);

  document.write(
    `
    Створено масив: ${JSON.stringify(storesListPrices)}<br>
    1) загальний прибуток кожного масиву за тиждень: ${getTotalSumOfStoresProfit(
      storesListPrices
    )}<br>
    2) загальний прибуток усіх магазинів по дням: ${getTotalProfitByDay(
      storesListPrices
    )}<br>
    3) загальний прибуток за робочі дні: ${getTotalProfitOfWorksOrHolidayDays(
      storesListPrices
    )}<br>
    4) загальний прибуток за вихідні дні: ${getTotalProfitOfWorksOrHolidayDays(
      storesListPrices,
      false
    )}<br>
    5) максимальний прибуток за середу: ${getMaxProfitByDay(
      storesListPrices
    )}<br>
    6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200: ${JSON.stringify(getPricesMoreThanCondition(
      storesListPrices
    ))}<br>
    7) відсортувати кожен тиждень за зростанням: ${JSON.stringify(
      sortPricesInWeek(storesListPrices)
    )}<br>
    8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків: ${JSON.stringify(
      sortWeeksByMaxElementDescending(storesListPrices)
    )}<br>
    9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку: ${JSON.stringify(
      sortWeeksBySumDescending(storesListPrices)
    )}<br>
`
  );
}
