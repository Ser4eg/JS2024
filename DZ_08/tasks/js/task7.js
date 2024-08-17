/*Задача 6.
Дано послідовність платіжок протягом року. 
Знайти сумарну кількість грошей за:
за весь рік;
у першій половині року;
у другій половині року;
за літо;
за ІІ квартал;
за парні місяці (з парними номерами);
за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
*/

const paymentsSequence = [
  100, 150, 50, 350, 300, 250, 200, 400, 50, 100, 250, 350,
];

function getTotalSum(paymentsSequence) {
  const totalSum = paymentsSequence.reduce((acc, score) => acc + score, 0);
  return totalSum;
}

function getFirstHalfYearSum(paymentsSequence) {
  let sum = 0;
  for (let i = 0; i < 6; i++) {
    sum += paymentsSequence[i];
  }
  return sum;
}

function getSeconfHalfYearSum(paymentsSequence) {
  let sum = 0;
  for (let i = 11; i > 5; i--) {
    sum += paymentsSequence[i];
  }
  return sum;
}

function getSummerSum(paymentsSequence) {
  let sum = 0;
  for (let i = 5; i < 7; i++) {
    sum += paymentsSequence[i];
  }
  return sum;
}

function getSecondQuarterSum(paymentsSequence) {
  let sum = 0;
  for (let i = 3; i < 6; i++) {
    sum += paymentsSequence[i];
  }
  return sum;
}

function getEvenMonthSum(paymentsSequence) {
  let sum = 0;
  for (let i = 1; i < paymentsSequence.length; i += 2) {
    sum += paymentsSequence[i];
  }
  return sum;
}

function getSeasonStartMonthsSum(paymentsSequence) {
  let sum = 0;
  for (let i = 2; i < paymentsSequence.length; i += 3) {
    sum += paymentsSequence[i];
  }
  return sum;
}

document.write(
  `Дано послідовність платіжок протягом року: ${paymentsSequence}<hr>
  Сумарна кількість грошей за рік - ${getTotalSum(paymentsSequence)}<br>
  Сумарна кількість грошей у першій половині року - ${getFirstHalfYearSum(
    paymentsSequence
  )}<br>
  Сумарна кількість грошей у другій половині року - ${getSeconfHalfYearSum(
    paymentsSequence
  )}<br>
  Сумарна кількість грошей за літо - ${getSummerSum(paymentsSequence)}<br>
  Сумарна кількість грошей за ІІ квартал - ${getSecondQuarterSum(
    paymentsSequence
  )}<br>
  Сумарна кількість грошей за парні місяці - ${getEvenMonthSum(
    paymentsSequence
  )}<br>
  Сумарна кількість грошей за місяці, які є початковими у сезоні - ${getSeasonStartMonthsSum(
    paymentsSequence
  )}<br>  
  `
);
