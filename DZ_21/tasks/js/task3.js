/*
Задача 1. Виводити на екран скільки хвилин користувач вже на сайті
Задача 2. Визначити скільки залишилось до кінця робочого дня (до 17.00) 
Задача 3. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
*/

class SiteTimeTracker {
  constructor(sessionStart) {
    this.sessionStart = sessionStart;
  }

  // Метод для виведення часу на сайті
  renderTimeOnSite() {
    const now = new Date();
    const timeSpent = now - this.sessionStart;
    const minutesSpent = Math.floor(timeSpent / (1000 * 60));
    document.getElementById(
      "time-on-site"
    ).textContent = `Ви на сайті вже ${minutesSpent} хвилин.`;
  }

  // Метод для виведення часу до кінця робочого дня
  renderTimeUntilEndOfWorkday() {
    const now = new Date();
    const endOfWorkday = new Date(now);
    endOfWorkday.setHours(17, 0, 0, 0);

    if (now > endOfWorkday) {
      document.getElementById("time-until-end-of-workday").textContent =
        "Робочий день вже закінчився.";
      return;
    }

    const timeLeft = endOfWorkday - now;
    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById(
      "time-until-end-of-workday"
    ).textContent = `До кінця робочого дня залишилось ${hoursLeft} годин і ${minutesLeft} хвилин.`;
  }

  // Метод для визначення, чи входить вказана дата в поточний тиждень
  isWithinCurrentWeek(targetDate) {
    const now = new Date();
    const startOfWeek = new Date(now);
    const dayOfWeek = now.getDay() === 0 ? 7 : now.getDay();
    startOfWeek.setDate(now.getDate() - dayOfWeek + 1);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    return targetDate >= startOfWeek && targetDate <= endOfWeek;
  }

  checkCurrentWeek() {
    const targetDateInput = document.getElementById("target-date").value;
    const targetDate = new Date(targetDateInput);

    const isWithinWeek = this.isWithinCurrentWeek(targetDate);
    document.getElementById("is-within-current-week").textContent = isWithinWeek
      ? "Дата входить в поточний тиждень."
      : "Дата не входить в поточний тиждень.";
  }

  // Метод для відображення секундомера
  renderStopwatch() {
    const now = new Date();
    const timeSpent = now - this.sessionStart;

    const hours = Math.floor(timeSpent / (1000 * 60 * 60));
    const minutes = Math.floor((timeSpent % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeSpent % (1000 * 60)) / 1000);

    // Форматуємо години, хвилини та секунди як 00:00:00
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    document.getElementById("stopwatch").textContent = formattedTime;
  }

  // Метод для запуску автоматичного оновлення часу
  startRendering() {
    this.renderTimeOnSite();
    this.renderTimeUntilEndOfWorkday();
    this.renderStopwatch();

    setInterval(() => this.renderTimeOnSite(), 60000);
    setInterval(() => this.renderTimeUntilEndOfWorkday(), 60000);
    setInterval(() => this.renderStopwatch(), 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.tracker = new SiteTimeTracker(new Date());
  tracker.startRendering();
});
