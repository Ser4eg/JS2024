/*Задача 4. 
Створити клас TBankomat, який моделює роботу банкомата. 
Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. 
Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
*/

class TBankomat {
  #bills;

  constructor(bills) {
    this.Bills = bills;
  }

  // Гетер для отримання кількості купюр
  get Bills() {
    return { ...this.#bills };
  }

  // Сетер для ініціалізації кількості купюр різних номіналів
  set Bills(bills) {
    const validDenominations = [5, 10, 20, 50, 100, 200];
    this.#bills = {};

    for (let denom of validDenominations) {
      if (bills[denom] !== undefined && bills[denom] >= 0) {
        this.#bills[denom] = bills[denom];
      } else {
        this.#bills[denom] = 0;
      }
    }
  }

  // Метод для знаходження максимальної суми, яку може видати банкомат
  getMaxSum() {
    let maxSum = 0;
    for (let denom in this.#bills) {
      maxSum += denom * this.#bills[denom];
    }
    return maxSum;
  }

  // Метод для знаходження мінімальної суми, яку може видати банкомат
  getMinSum() {
    for (let denom of [5, 10, 20, 50, 100, 200]) {
      if (this.#bills[denom] > 0) {
        return parseInt(denom); // Повертаємо перший доступний номінал
      }
    }
    return 0; // Якщо немає купюр
  }

  // Метод для зняття певної суми
  withdraw(amount) {
    if (amount <= 0) throw new Error("Сума для зняття повинна бути більше 0!");

    let remainingAmount = amount;
    let billsToGive = {};

    // Сортуємо номінали купюр за спаданням
    const denominations = Object.keys(this.#bills).sort((a, b) => b - a);

    for (let denom of denominations) {
      denom = parseInt(denom);
      const availableBills = this.#bills[denom];
      const neededBills = Math.floor(remainingAmount / denom);

      if (availableBills > 0) {
        const billsToWithdraw = Math.min(neededBills, availableBills);
        if (billsToWithdraw > 0) {
          billsToGive[denom] = billsToWithdraw;
          remainingAmount -= billsToWithdraw * denom;
        }
      }

      if (remainingAmount === 0) break;
    }

    if (remainingAmount > 0) {
      throw new Error("Банкомат не може видати точну суму. Недостатньо купюр.");
    }

    for (let denom in billsToGive) {
      this.#bills[denom] -= billsToGive[denom];
    }

    return billsToGive;
  }

  // Метод для виведення інформації про кількість купюр
  toString() {
    let result = "Кількість купюр у банкоматі:\n";
    for (let denom in this.#bills) {
      result += `Номінал ${denom} грн: ${this.#bills[denom]} купюр\n`;
    }
    return result;
  }
}

if (confirm("Почати тестування?")) {
  try {
    const bankomat = new TBankomat({
      5: 10,
      10: 20,
      20: 15,
      50: 5,
      100: 10,
      200: 3,
    });

    console.log(bankomat.toString());
    console.log(
      "Максимальна сума, яку може видати банкомат:",
      bankomat.getMaxSum()
    );
    console.log(
      "Мінімальна сума, яку може видати банкомат:",
      bankomat.getMinSum()
    );

    // Знімаємо 385 грн
    const withdrawnBills = bankomat.withdraw(785);
    console.log("Купюри, видані банкоматом:", withdrawnBills);

    console.log(bankomat.toString());
  } catch (error) {
    console.error(error.message);
  }
}
