/*Задача 4. 
Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
•	починаються на букву «А»;
•	перша і остання літери співпадають;
•	складаються з більше ніш 5 символів;
*/

function getFirstLetterCount(carNumbers, currentLetter = "A") {
  let count = 0;
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i].startsWith(currentLetter)) {
      count++;
    }
  }
  return count;
}

function getFirstLastLettersMatchCount(carNumbers) {
  let count = 0;
  for (let i = 0; i < carNumbers.length; i++) {
    const carNumber = carNumbers[i];
    if (carNumber[0] === carNumber[carNumber.length - 1]) {
      count++;
    }
  }
  return count;
}

function getMoreSymbolCount(carNumbers, currentSymbolNumber = 5) {
  let count = 0;
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i].length > currentSymbolNumber) {
      count++;
    }
  }
  return count;
}
const carNumbers = ["AE1111CI", "BC111", "B111B", "A22", "AE1111CA"];

document.write(
  `Дано послідовність номерів автомобілів: ${carNumbers}<hr>
  Кількість номерів які починаються на букву «А» - ${getFirstLetterCount(
    carNumbers
  )}<br>
  Кількість номерів яких перша і остання літери співпадають - ${getFirstLastLettersMatchCount(
    carNumbers
  )}<br>
  Кількість номерів які складаються з більше ніш 5 символів - ${getMoreSymbolCount(
    carNumbers
  )}<br>  
  `
);
