/*Задача 1. 
Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
      1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
      2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
      3)Сформувати список з тих цін, які більші за попереднє значення
      4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
      5)Підрахувати кількість змін цін
      6)Визначити, чи є ціна, що менше 1000
      7)Визначати, чи усі ціни більше за 1000
      8)Підрахувати кількість цін, що більше за 1000
      9)Підрахувати суму цін, що більше за 1000
      10)Знайти першу ціну, що більше за 1000
      11)Знайти індекс першої ціни, що більше за 1000
      12)Знайти останню ціну, що більше за 1000
      13)Знайти індекс останньої ціни, що більше за 1000

*/

function getRandomNumber(min = 1, max = 10000) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getNewArray(length = 10) {
  return Array.from({ length }, () => getRandomNumber());
}

// 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
function getArrayWhithConditionMoreThan(array, conditionValue = 1000) {
  return array.filter((el) => el > conditionValue);
}

// 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
function getArrayIndexWhithConditionMoreThan(array, conditionValue = 1000) {
  return array
    .map((num, index) => (num > conditionValue ? index : -1))
    .filter((index) => index !== -1);
}

//  3)Сформувати список з тих цін, які більші за попереднє значення
function getPricesMoreThanPrevious(array) {
  return array.filter((value, index) => index > 0 && value > array[index - 1]);
}

// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
function getPercentageValuesArray(array) {
  const maxValue = Math.max(...array);
  return array.map((value) => (value / maxValue) * 100);
}

// 5)Підрахувати кількість змін цін
function countPriceChanges(array) {
  return array.reduce((count, currentValue, index, array) => {
    if (index > 0 && currentValue !== array[index - 1]) {
      return count + 1;
    }
    return count;
  }, 0);
}

// 6)Визначити, чи є ціна, що менше 1000
function isPriceLessThanCondition(array, conditionValue = 1000) {
  return array.some((value) => value < conditionValue);
}
// 7)Визначати, чи усі ціни більше за 1000
function isAllPricesMoreThanCondition(array, conditionValue = 1000) {
  return array.every((value) => value > conditionValue);
}
// 8)Підрахувати кількість цін, що більше за 1000
function getNumberPricesMoreThanCondition(array, conditionValue = 1000) {
  return array.filter((price) => price > conditionValue).length;
  // return getArrayIndexWhithConditionMoreThan(array, conditionValue).length;
}

// 9)Підрахувати суму цін, що більше за 1000
function getSumPricesMoreThanCondition(array, conditionValue = 1000) {
  return array
    .filter((price) => price > conditionValue)
    .reduce((sum, price) => sum + price, 0);
}

// 10)Знайти першу ціну, що більше за 1000
function getFirstPriceMoreThanCondition(array, conditionValue = 1000) {
  return array.find((price) => price > conditionValue);
}

// 11)Знайти індекс першої ціни, що більше за 1000
function getIndexOfFirstPriceMoreThanCondition(array, conditionValue = 1000) {
  return array.findIndex((price) => price > conditionValue);
}

// 12)Знайти останню ціну, що більше за 1000
function getLastPriceMoreThanCondition(array, conditionValue = 1000) {
  return array.findLast((price) => price > conditionValue);
}

// 13)Знайти індекс останньої ціни, що більше за 1000
function getIndexOfLastPriceMoreThanCondition(array, conditionValue = 1000) {
  return array.findLastIndex((price) => price > conditionValue);
}

if (confirm("Почати тестування?")) {
  const arrayLength = parseInt(
    prompt("Вкажіть кількість елементів масива", "10")
  );
  const priceList = getNewArray(arrayLength);
  document.write(
    `
    Створено масив з ${arrayLength} елементами: ${priceList}<br>
    1)Створено новий масив, у якому є тільки ті, що більші за 1000 грн: ${getArrayWhithConditionMoreThan(
      priceList
    )}<br>    
    2)Створено новий масив, у якому є номери тільки тих, що більші за 1000 грн.: ${getArrayIndexWhithConditionMoreThan(
      priceList
    )}<br>
    3)Сформувати список з тих цін, які більші за попереднє значення: ${getPricesMoreThanPrevious(
      priceList
    )}<br>
    4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального: ${getPercentageValuesArray(
      priceList
    )}<br>
    5)Підрахувати кількість змін цін: ${countPriceChanges(priceList)}<br>
    6)Визначити, чи є ціна, що менше 1000: ${isPriceLessThanCondition(
      priceList
    )}<br>
    7)Визначати, чи усі ціни більше за 1000: ${isAllPricesMoreThanCondition(
      priceList
    )}<br>
    8)Підрахувати кількість цін, що більше за 1000: ${getNumberPricesMoreThanCondition(
      priceList
    )}<br>
    9)Підрахувати суму цін, що більше за 1000: ${getSumPricesMoreThanCondition(
      priceList
    )}<br>
    10)Знайти першу ціну, що більше за 1000: ${getFirstPriceMoreThanCondition(
      priceList
    )}<br>
    11)Знайти індекс першої ціни, що більше за 1000: ${getIndexOfFirstPriceMoreThanCondition(
      priceList
    )}<br>
    12)Знайти останню ціну, що більше за 1000: ${getLastPriceMoreThanCondition(
      priceList
    )}<br>
    13)Знайти індекс останньої ціни, що більше за 1000: ${getIndexOfLastPriceMoreThanCondition(
      priceList
    )}<br>
    `
  );
}
