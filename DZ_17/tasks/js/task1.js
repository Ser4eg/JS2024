/*Задача 1. 
Створити клас, що дозволяє виконувати такі операції над масивами: 
знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
*/
class ArrayOperations {
  #array;

  constructor(array = []) {
    this.Array = array;
  }

  get Array() {
    return this.#array;
  }

  set Array(newArray) {
    if (!Array.isArray(newArray)) {
      throw new Error("Потрібно передати масив!");
    }
    this.#array = newArray;
  }

  // метод для знаходження кількості додатних чисел
  static countPositive(array) {
    return array.reduce((count, num) => (num >= 0 ? count + 1 : count), 0);
  }

  // метод для знаходження кількості від’ємних чисел
  static countNegative(array) {
    return array.reduce((count, num) => (num < 0 ? count + 1 : count), 0);
  }

  // метод для визначення кількості входжень певного числа в масиві
  static countOccurrences(array, number) {
    return array.reduce(
      (count, num) => (num === number ? count + 1 : count),
      0
    );
  }

  toString() {
    return `Поточний масив: [${this.#array.join(", ")}]`;
  }
}

if (confirm("Почати тестування?")) {
  try {
    const arrExample = new ArrayOperations([1, -2, 3, 4, -5, 0, 3, -2]);
    console.log(arrExample.toString());

    console.log(
      "Кількість додатних чисел:",
      ArrayOperations.countPositive(arrExample.Array)
    );
    console.log(
      "Кількість від’ємних чисел:",
      ArrayOperations.countNegative(arrExample.Array)
    );
    console.log(
      "Кількість входжень числа 3:",
      ArrayOperations.countOccurrences(arrExample.Array, 3)
    );

    // новий масив через сетер
    arrExample.Array = [10, -20, 30, -40, 50, 0, -20];
    console.log(arrExample.toString());

    console.log(
      "Кількість додатних чисел:",
      ArrayOperations.countPositive(arrExample.Array)
    );
    console.log(
      "Кількість від’ємних чисел:",
      ArrayOperations.countNegative(arrExample.Array)
    );
    console.log(
      "Кількість входжень числа -20:",
      ArrayOperations.countOccurrences(arrExample.Array, -20)
    );
  } catch (error) {
    console.error(error.message);
  }
}
