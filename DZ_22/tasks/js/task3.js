/*
Задача 1. Виводити на екран скільки хвилин користувач вже на сайті
Задача 2. Визначити скільки залишилось до кінця робочого дня (до 17.00) 
Задача 3. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
*/

class TextAnalyzer {
  constructor(taskInputs) {
    this.taskInputs = taskInputs;
    this.tasks = [];
  }

  runTasks() {
    this.tasks.push(this.findStringsWithDigits(this.taskInputs[0].value));
    this.tasks.push(this.findStringsWithoutDigits(this.taskInputs[1].value));
    this.tasks.push(this.findStringsWithVowels(this.taskInputs[2].value));
    this.tasks.push(this.findStringsWithoutVowels(this.taskInputs[3].value));
    this.tasks.push(this.findStringsWithOneOrThree(this.taskInputs[4].value));
    this.tasks.push(this.findAllNumbers(this.taskInputs[5].value));
    this.tasks.push(this.findPunctuation(this.taskInputs[6].value));
    this.tasks.push(this.findSegmentsByPunctuation(this.taskInputs[7].value));
    this.tasks.push(this.containsDate(this.taskInputs[8].value));
    this.tasks.push(this.countTwoDigitNumbers(this.taskInputs[9].value));
    this.tasks.push(this.findCardNumbers(this.taskInputs[10].value));
    this.tasks.push(this.isGovernmentSite(this.taskInputs[11].value));
    this.tasks.push(this.findYearsAfter2021(this.taskInputs[12].value));
    this.tasks.push(this.isUkrainianPhoneNumber(this.taskInputs[13].value));
    this.tasks.push(this.replaceSpaceWithHyphen(this.taskInputs[14].value));
    this.tasks.push(this.formatDate(this.taskInputs[15].value));
    this.tasks.push(this.isWeekend(this.taskInputs[16].value));
    return this.tasks;
  }

  // Методи для кожної задачі аналогічні попереднім
  // Наприклад:
  findStringsWithDigits(text) {
    return text.match(/\b\w*\d\w*\b/g) || [];
  }

  findStringsWithoutDigits(text) {
    return text.split(", ").filter((item) => !/\d/.test(item));
  }

  findStringsWithVowels(text) {
    return text.match(/\b\w*[aeiouyаеєиіїоуюя]\w*\b/gi) || [];
  }

  findStringsWithoutVowels(text) {
    return text.split(", ").filter((item) => !/[aeiouyаеєиіїоуюя]/i.test(item));
  }

  findStringsWithOneOrThree(text) {
    return text.match(/\b\w*[13]\w*\b/g) || [];
  }

  findAllNumbers(text) {
    return text.match(/\b\d+\b/g) || [];
  }

  findPunctuation(text) {
    const punctuationMatches = text.match(/[\p{P}]/gu) || [];
    return [...new Set(punctuationMatches)];
  }

  findSegmentsByPunctuation(text) {
    return text.split(/[.,\/#!$%\^&\*;:{}=\-_`~()]+/).filter(Boolean) || [];
  }

  containsDate(text) {
    return /\b\d{2}\.\d{2}\.\d{4}\b/.test(text);
  }

  countTwoDigitNumbers(text) {
    const matches = text.match(/\b\d{2}\b/g) || [];
    return matches.length;
  }

  findCardNumbers(text) {
    return text.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g) || [];
  }

  isGovernmentSite(text) {
    return /\.gov\b/.test(text);
  }

  findYearsAfter2021(text) {
    return text.match(/\b(202[2-9]|20[3-9]\d|2[1-9]\d{2})\b/g) || [];
  }

  isUkrainianPhoneNumber(text) {
    return /^\+38\d{10}$/.test(text);
  }

  replaceSpaceWithHyphen(text) {
    return text.replace(/(\w+)\s+(\w+)/, "$1-$2");
  }

  formatDate(text) {
    return text.replace(/\b(\d{2})\.(\d{2})\.(\d{4})\b/, "$1/$2/$3");
  }

  isWeekend(text) {
    const day = text.toLowerCase().trim();
    const weekendDays = ["0", "6", "sun", "sat"];
    return weekendDays.includes(day) || /(sun|sat)/i.test(day);
  }
}

function analyzeText() {
  const taskInputs = document.querySelectorAll("#task-inputs input");
  const analyzer = new TextAnalyzer(taskInputs);
  const results = analyzer.runTasks();
  renderResults(results);
}

function renderResults(results) {
  const taskResultsContainer = document.getElementById("task-results");
  taskResultsContainer.innerHTML = "";

  const taskTitles = [
    "Задача 1: Рядки з цифрами",
    "Задача 2: Рядки без цифр",
    "Задача 3: Рядки з голосними",
    "Задача 4: Рядки без голосних",
    "Задача 5: Рядки з '1' або '3'",
    "Задача 6: Числа в тексті",
    "Задача 7: Знаки пунктуації",
    "Задача 8: Сегменти за розділовими знаками",
    "Задача 9: Чи є дата?",
    "Задача 10: Кількість двоцифрових чисел",
    "Задача 11: Номери банківських карток",
    "Задача 12: Чи урядовий сайт?",
    "Задача 13: Роки після 2021",
    "Задача 14: Чи український номер телефону?",
    "Задача 15: Заміна пробілу на дефіс",
    "Задача 16: Формат дати день/місяць/рік",
    "Задача 17: Чи вихідний день?",
  ];

  results.forEach((result, index) => {
    const taskTitle = taskTitles[index];
    const taskResult = document.createElement("div");
    taskResult.classList.add("task-result");

    const title = document.createElement("h3");
    title.textContent = taskTitle;
    taskResult.appendChild(title);

    const content = document.createElement("p");
    content.textContent = Array.isArray(result)
      ? result.join(", ")
      : result.toString();
    taskResult.appendChild(content);

    taskResultsContainer.appendChild(taskResult);
  });
}
