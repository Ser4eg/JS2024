/*Задача 2. 
Створити службове авто (водій, марка, номер). 
Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
*/
class ServiceCar {
  // Приватне статичне поле для зберігання єдиного екземпляра
  static #instance = null;

  // Приватні поля для зберігання властивостей авто
  #driver;
  #brand;
  #number;

  // Приватний конструктор
  constructor(driver, brand, number) {
    if (ServiceCar.#instance) {
      throw new Error(
        "Екземпляр цього класу вже існує. Використовуйте ServiceCar.getInstance()."
      );
    }

    // Використовуємо сетери для ініціалізації полів
    this.Driver = driver;
    this.Brand = brand;
    this.Number = number;

    // Зберігаємо єдиний екземпляр
    ServiceCar.#instance = this;
  }

  // Статичний метод для створення або повернення єдиного екземпляра
  static getInstance(driver, brand, number) {
    if (!ServiceCar.#instance) {
      ServiceCar.#instance = new ServiceCar(driver, brand, number);
    }
    return ServiceCar.#instance;
  }

  // Гетер та сетер для водія
  get Driver() {
    return this.#driver;
  }

  set Driver(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Некоректне ім'я водія!");
    }
    this.#driver = value;
  }

  // Гетер та сетер для марки автомобіля
  get Brand() {
    return this.#brand;
  }

  set Brand(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Некоректна марка авто!");
    }
    this.#brand = value;
  }

  // Гетер та сетер для номера автомобіля
  get Number() {
    return this.#number;
  }

  set Number(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Некоректний номер авто!");
    }
    this.#number = value;
  }

  // Метод для виведення інформації про авто
  toString() {
    return `Водій: ${this.#driver}, Марка: ${this.#brand}, Номер: ${
      this.#number
    }`;
  }
}

if (confirm("Почати тестування?")) {
  try {
    const car1 = ServiceCar.getInstance("Іван Іванов", "Toyota", "AA1234BB");
    console.log(car1.toString());

    // Спроба встановити нове значення через сетер
    car1.Driver = "Петро Петров";
    console.log(car1.toString());

    // Спроба створити другий екземпляр
    const car2 = ServiceCar.getInstance(
      "Микола Миколайович",
      "Honda",
      "AB5678CD"
    );
    console.log(car2.toString());

    // Перевіримо, чи це той самий екземпляр
    console.log(car1 === car2); // Виведе: true
  } catch (error) {
    console.error(error.message);
  }
}
