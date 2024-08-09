/*Задача 4. 
Створити окремі функції, які для 4 чисел знаходять:
1)суму;
2)добуток;
3)середнє арифметичне;
4)мінімальне значення.
*/

//============= Function Expression ============================================
const getSum = function (num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
  return num1 + num2 + num3 + num4;
};
//============= Arrow Function =================================================
const getMultiplication = (num1 = 0, num2 = 0, num3 = 0, num4 = 0) =>
  num1 * num2 * num3 * num4;

//============= Function Declaration============================================
function getArithmeticMean(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
  return getSum(num1, num2, num3, num4) / 4;
}

//============= Function Declaration============================================
function getMinNumber(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
  let min = num1;
  if (num2 < min) {
    min = num2;
  }
  if (num3 < min) {
    min = num3;
  }
  if (num4 < min) {
    min = num4;
  }
  return min;
}

//====================================================================
let num1 = parseFloat(prompt("Вкажіть перше число", "1"));
let num2 = parseFloat(prompt("Вкажіть друге число", "2"));
let num3 = parseFloat(prompt("Вкажіть третє число", "3"));
let num4 = parseFloat(prompt("Вкажіть четверте число", "4"));

alert(
  `Сума чисел ${num1}, ${num2}, ${num3}, ${num4} дорівнює ${getSum(
    num1,
    num2,
    num3,
    num4
  )} `
);

alert(
  `Добуток чисел ${num1}, ${num2}, ${num3}, ${num4} дорівнює ${getMultiplication(
    num1,
    num2,
    num3,
    num4
  )} `
);

alert(
  `Середнє арифметичне чисел ${num1}, ${num2}, ${num3}, ${num4} дорівнює ${getArithmeticMean(
    num1,
    num2,
    num3,
    num4
  ).toFixed(2)} `
);

alert(
  `Мінімальне число серед чисел ${num1}, ${num2}, ${num3}, ${num4} дорівнює ${getMinNumber(
    num1,
    num2,
    num3,
    num4
  )} `
);
