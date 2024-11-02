/*Задача 2. 
Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
Вивести всіх простих клієнтів;
Вивести всіх клієнтів GoldenClient;
Знайти сумарну кількість грошей на рахунку;
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

class Bank {
  #clients;

  constructor() {
    this.#clients = [];
  }

  addClient(client) {
    this.#clients.push(client);
  }

  getSimpleClients() {
    return this.#clients.filter((client) => !(client instanceof GoldenClient));
  }

  getGoldenClients() {
    return this.#clients.filter((client) => client instanceof GoldenClient);
  }

  getTotalBalance() {
    return this.#clients.reduce((total, client) => total + client.Balance, 0);
  }
}

try {
  const bank = new Bank();

  const client1 = new Client(1, "Іван Мазепа", 5000);
  const client2 = new Client(2, "Леся Українка", 7000);
  const goldenClient1 = new GoldenClient(3, "Богдан Хмельницький", 3000, 2000, 15);
  const goldenClient2 = new GoldenClient(4, "Ярослав Мудрий", 10000, 5000, 10);

  bank.addClient(client1);
  bank.addClient(client2);
  bank.addClient(goldenClient1);
  bank.addClient(goldenClient2);

  console.log("Прості клієнти:");
  bank.getSimpleClients().forEach((client) => console.log(client.toString()));

  console.log("----------");

  console.log("Клієнти GoldenClient:");
  bank.getGoldenClients().forEach((client) => console.log(client.toString()));

  console.log("----------");

  console.log(
    `Загальна кількість грошей на рахунках: ${bank.getTotalBalance()} грн.`
  );
} catch (error) {
  console.log(error.message);
}
