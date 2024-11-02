/*Задача 1. 
Задача 1. Створити клас Client
Властивості
    ID
    ПІБ
    Кількість грошей на рахунку
Методи
    Додавання грошей
    Зняття грошей
    ToString

На основі цього класу створити клас GoldenClient
Властивості
    ID
    ПІБ
    Кількість грошей на рахунку
    Ліміт кредитних коштів
    Відсоток за використання кредитних коштів
Методи
    Додавання грошей
    Зняття грошей
    Визначення пені за використання кредитних коштів
    ToString
*/

// Основний клас Client
class Client {
  #id;
  #fullName;
  #balance;

  constructor(id, fullName, balance) {
    this.ID = id;
    this.FullName = fullName;
    this.Balance = balance;
  }

  get ID() {
    return this.#id;
  }

  set ID(value) {
    if (!value || value <= 0) throw new Error("Некоректний ID");
    this.#id = value;
  }

  get FullName() {
    return this.#fullName;
  }

  set FullName(value) {
    if (!value || value.trim() === "") throw new Error("Некоректне ім'я");
    this.#fullName = value;
  }

  get Balance() {
    return this.#balance;
  }

  set Balance(value) {
    if (value < 0) throw new Error("Баланс не може бути від'ємним");
    this.#balance = value;
  }

  addMoney(amount) {
    if (amount <= 0) {
      console.log("Сума повинна бути більше 0");
      return;
    }
    this.Balance += amount;
    console.log(`Додано ${amount} грн. Ваш баланс: ${this.Balance} грн.`);
  }

  getMoney(amount) {
    if (amount <= 0) {
      console.log("Сума повинна бути більше 0");
      return;
    }
    if (amount > this.Balance) {
      console.log("Недостатньо коштів на рахунку.");
      return;
    }
    this.Balance -= amount;
    console.log(`Знято ${amount} грн. Ваш баланс: ${this.Balance} грн.`);
  }

  toString() {
    return `ID: ${this.ID}, ПІБ: ${this.FullName}, Баланс: ${this.Balance} грн.`;
  }
}

class GoldenClient extends Client {
  #creditLimit;
  #creditInterest;

  constructor(id, fullName, balance, creditLimit, creditInterest) {
    super(id, fullName, balance);
    this.CreditLimit = creditLimit;
    this.CreditInterest = creditInterest;
  }

  get CreditLimit() {
    return this.#creditLimit;
  }

  set CreditLimit(value) {
    if (value < 0) throw new Error("Кредитний ліміт не може бути від'ємним");
    this.#creditLimit = value;
  }

  get CreditInterest() {
    return this.#creditInterest;
  }

  set CreditInterest(value) {
    if (value < 0) throw new Error("Відсоток за кредит не може бути від'ємним");
    this.#creditInterest = value;
  }

  getMoney(amount) {
    if (amount <= 0) {
      console.log("Сума повинна бути більше 0");
      return;
    }

    const availableFunds = this.Balance + this.CreditLimit;

    if (amount > availableFunds) {
      console.log("Недостатньо коштів (включно з кредитом).");
      return;
    }

    if (amount <= this.Balance) {
      this.Balance -= amount;
      console.log(`Знято ${amount} грн. Ваш баланс: ${this.Balance} грн.`);
    } else {
      const creditUsed = amount - this.Balance;
      this.Balance = 0;
      this.CreditLimit -= creditUsed;
      console.log(
        `Знято ${amount} грн. Використано ${creditUsed} грн. кредитних коштів. Кредитний ліміт: ${this.CreditLimit} грн.`
      );
    }
  }

  calculateCreditPenalty() {
    const creditUsed = this.#creditLimit - this.CreditLimit;
    const penalty = creditUsed * (this.CreditInterest / 100);
    console.log(`Пені за використання кредитних коштів: ${penalty} грн.`);
    return penalty;
  }

  toString() {
    return `ID: ${this.ID}, ПІБ: ${this.FullName}, Баланс: ${this.Balance} грн., Кредитний ліміт: ${this.CreditLimit} грн., Відсоток за кредит: ${this.CreditInterest}%`;
  }
}

try {
  const client = new Client(1, "Іван Мазепа", 5000);
  console.log(client.toString());
  client.addMoney(2000);
  client.getMoney(3000);
  console.log(client.toString());

  console.log("----------");

  const goldenClient = new GoldenClient(2, "Богдан Хмельницький", 3000, 2000, 15);
  console.log(goldenClient.toString());
  goldenClient.getMoney(4500);
  goldenClient.calculateCreditPenalty();
  console.log(goldenClient.toString());
} catch (error) {
  console.log(error.message);
}
