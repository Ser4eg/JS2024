/*Задача 1. 
Дано два об’єкта. Обидва містять масив цілих чисел. 
При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, 
які знаходяться між заданими мінімальним і максимальних значенням.
Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

*/
if (confirm("Почати тестування?")) {
  let obj1 = {
    numbers: [1, 2, 3, 4, 5],
    sum: function () {
      return this.numbers.reduce((total, num) => total + num, 0);
    },
  };

  let obj2 = {
    numbers: [1, 2, 3, 4, 5],
    multiplication: function (min, max) {
      return this.numbers
        .filter((num) => num >= min && num <= max)
        .reduce((product, num) => product * num, 1);
    },
  };

  let sumUsingCall = obj1.sum.call(obj2);
  console.log("Сума елементів obj2 (через call):", sumUsingCall);

  let sumUsingApply = obj1.sum.apply(obj1);
  console.log("Сума елементів obj1 (через apply):", sumUsingApply);

  let productUsingCall = obj2.multiplication.call(obj2, 2, 5);
  console.log(
    "Добуток елементів obj2 в діапазоні [2, 5] (через call):",
    productUsingCall
  );

  let productUsingApply = obj2.multiplication.apply(obj1, [2, 5]);
  console.log(
    "Добуток елементів obj1 в діапазоні [2, 5] (через apply):",
    productUsingApply
  );
}
