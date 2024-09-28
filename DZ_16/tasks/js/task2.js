/*Задача 2. 
Створити клас TMoney для роботи з грошовими сумами. 
Сума повинна зберігатися у вигляді доларового еквіваленту. 
Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, 
та визначення курсу долара, при якому сума у гривнях збільшиться на 100. 
Курс долара зберігати в окремому полі.
*/
class TMoney {
  #balance;
  #rate;

  constructor(balance, rate) {
    this.Rate = rate;
    this.Balance = balance;
  }

  get Rate() {
    return this.#rate;
  }

  set Rate(newVal) {
    if (newVal <= 0)
      throw new Error("Курс не може бути від'ємним або нульовим!");
    this.#rate = newVal;
  }

  get Balance() {
    return this.#balance * this.Rate;
  }

  set Balance(newGrnVal) {
    if (newGrnVal < 0) throw new Error("Кількість гривень некоректна!");
    this.#balance = newGrnVal / this.Rate;
  }

  checkGrnValue(grnValue) {
    if (grnValue < 0)
      throw new Error("Ви не можете додавати від'ємні значення");
  }

  addGrn(grnValue) {
    this.checkGrnValue(grnValue);
    this.#balance += grnValue / this.Rate;
  }

  withdrawGrn(grnValue) {
    this.checkGrnValue(grnValue);

    if (grnValue > this.Balance)
      throw new Error("Недостатньо коштів на рахунку!");

    this.#balance -= grnValue / this.Rate;
    return true;
  }

  getNewDollarRate100() {
    const newBalanceInGrn = this.Balance + 100;
    return newBalanceInGrn / this.#balance;
  }

  toString() {
    return `Баланс UAH: ${this.Balance.toFixed(2)}, Курс USD: ${this.Rate}`;
  }
}

if (confirm("Почати тестування?")) {
  try {
    // 4000 гривень, курс 40 грн/долар
    const money = new TMoney(4000, 40);
    document.write(money.toString() + "<br>");

    // Додаємо 1000 грн
    money.addGrn(1000);
    document.write(money.toString() + "<br>");

    // Знімаємо 2000 грн
    money.withdrawGrn(2000);
    document.write(money.toString() + "<br>");

    const newRate = money.getNewDollarRate100();
    document.write(
      `Новий курс для збільшення суми на 100 грн: ${newRate.toFixed(2)}<br>`
    );
  } catch (error) {
    document.write(error.message);
  }
}
