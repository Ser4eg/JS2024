/*Задача 1. 
Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. 
Дата представляється структурою із трьома полями. 
Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. 
Введення та виведення дати реалізувати за допомогою методу  toString.
*/

class TDate {
  #day;
  #month;
  #year;

  constructor(day, month, year) {
    if (this.#isValidDate(day, month, year)) {
      this.#day = day;
      this.#month = month;
      this.#year = year;
    } else {
      throw new Error("Некоректна дата");
    }
  }

  // Приватний метод для перевірки коректності дати
  #isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return (
      date.getDate() === day &&
      date.getMonth() + 1 === month &&
      date.getFullYear() === year
    );
  }

  // Гетер для дня
  get day() {
    return this.#day;
  }

  // Сетер для дня
  set day(value) {
    if (this.#isValidDate(value, this.#month, this.#year)) {
      this.#day = value;
    } else {
      throw new Error("Некоректний день");
    }
  }

  // Гетер для місяця
  get month() {
    return this.#month;
  }

  // Сетер для місяця
  set month(value) {
    if (this.#isValidDate(this.#day, value, this.#year)) {
      this.#month = value;
    } else {
      throw new Error("Некоректний місяць");
    }
  }

  // Гетер для року
  get year() {
    return this.#year;
  }

  // Сетер для року
  set year(value) {
    if (this.#isValidDate(this.#day, this.#month, value)) {
      this.#year = value;
    } else {
      throw new Error("Некоректний рік");
    }
  }

  // Метод збільшення/зменшення дати на певну кількість днів
  changeDays(days) {
    const date = new Date(this.#year, this.#month - 1, this.#day);
    date.setDate(date.getDate() + days);
    this.#day = date.getDate();
    this.#month = date.getMonth() + 1;
    this.#year = date.getFullYear();
  }

  // Метод збільшення/зменшення дати на певну кількість місяців
  changeMonths(months) {
    const date = new Date(this.#year, this.#month - 1, this.#day);
    date.setMonth(date.getMonth() + months);
    this.#day = date.getDate();
    this.#month = date.getMonth() + 1;
    this.#year = date.getFullYear();
  }

  // Метод збільшення/зменшення дати на певну кількість років
  changeYears(years) {
    const date = new Date(this.#year, this.#month - 1, this.#day);
    date.setFullYear(date.getFullYear() + years);
    this.#day = date.getDate();
    this.#month = date.getMonth() + 1;
    this.#year = date.getFullYear();
  }

  // Метод для виведення дати у форматі "день.місяць.рік"
  toString() {
    const dayStr = this.#day.toString().padStart(2, "0");
    const monthStr = this.#month.toString().padStart(2, "0");
    return `${dayStr}.${monthStr}.${this.#year}`;
  }
}

if (confirm("Почати тестування?")) {
  try {
    const myDate = new TDate(24, 9, 2024);
    console.log(myDate.toString());

    // Збільшуємо на 10 днів
    myDate.changeDays(10);
    console.log("Після додавання 10 днів:", myDate.toString());

    // Зменшуємо на 2 місяці
    myDate.changeMonths(-2);
    console.log("Після віднімання 2 місяців:", myDate.toString());

    // Додаємо 1 рік
    myDate.changeYears(1);
    console.log("Після додавання 1 року:", myDate.toString());

    // Використання сетера для зміни дати
    myDate.day = 30;
    console.log("Змінена дата (день):", myDate.toString());

    myDate.month = 12;
    console.log("Змінена дата (місяць):", myDate.toString());

    myDate.year = 2025;
    console.log("Змінена дата (рік):", myDate.toString());
  } catch (error) {
    console.log(error.message);
  }
}
