/*Задача 3. 
Створити клас Нагадувач. 
Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і 
також виводиться порядковий номер скільки раз вже нагадування було. 
Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. 
Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.
*/
class Reminder {
  static #instance = null;

  #message;
  #intervalId;
  #intervalTime;
  #count = 0;

  constructor(message, intervalTime) {
    if (Reminder.#instance) {
      throw new Error(
        "Нагадувач вже існує. Використовуйте Reminder.getInstance() для отримання екземпляра."
      );
    }

    this.Message = message;
    this.IntervalTime = intervalTime;

    this.startReminder();

    Reminder.#instance = this;
  }

  // Статичний метод для створення або отримання єдиного екземпляра
  static getInstance(message, intervalTime) {
    if (!Reminder.#instance) {
      Reminder.#instance = new Reminder(message, intervalTime);
    }
    return Reminder.#instance;
  }

  get Message() {
    return this.#message;
  }

  set Message(newMessage) {
    if (typeof newMessage !== "string" || newMessage.trim() === "") {
      throw new Error("Повідомлення повинно бути непорожнім рядком!");
    }
    this.#message = newMessage;
  }

  get IntervalTime() {
    return this.#intervalTime;
  }

  set IntervalTime(newIntervalTime) {
    if (typeof newIntervalTime !== "number" || newIntervalTime <= 0) {
      throw new Error("Інтервал часу повинен бути числом більше 0!");
    }
    this.#intervalTime = newIntervalTime;
  }

  // Метод для запуску нагадувача
  startReminder() {
    if (this.#intervalId) {
      clearInterval(this.#intervalId);
    }

    this.#intervalId = setInterval(() => {
      this.#count++;
      console.log(`Нагадування #${this.#count}: ${this.#message}`);
    }, this.#intervalTime * 1000);
  }

  // Метод для зупинки нагадувача
  stopReminder() {
    if (this.#intervalId) {
      clearInterval(this.#intervalId);
      this.#intervalId = null;
      console.log("Нагадувач зупинено.");
    }
  }

  // Метод для зміни повідомлення без зупинки таймера
  changeMessage(newMessage) {
    this.Message = newMessage;
    console.log("Повідомлення змінено.");
  }
}

if (confirm("Почати тестування?")) {
  try {
    const reminder = Reminder.getInstance("Випити воду!", 5);

    // Змінюємо повідомлення через 10 секунд
    setTimeout(() => {
      reminder.changeMessage("Перерва!");
    }, 10000);

    // Зупиняємо нагадувач через 20 секунд
    setTimeout(() => {
      reminder.stopReminder();
    }, 20000);

    // Спроба створити другий екземпляр
    const anotherReminder = Reminder.getInstance("Зробити зарядку!", 3);
  } catch (error) {
    console.error(error.message);
  }
}
