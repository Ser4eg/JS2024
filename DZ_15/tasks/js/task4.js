/*Задача 4. 
Розробити клас MultChecker для перевірки таблиці множення
Поля
Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
Кількість правильних відповідей
Кількість неправильних відповідей
Методи
Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
Перевірка правильності вказаної відповіді
render - виведення інформації про тестування на екран
*/

if (confirm("Почати тестування?")) {
  class MultChecker {
    constructor(fixedNumber) {
      this.fixedNumber = fixedNumber;
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
    }

    generateExample() {
      this.randomNumber = Math.floor(Math.random() * 10) + 1;
      let question = `Скільки буде ${this.fixedNumber} * ${this.randomNumber}?`;
      return question;
    }

    checkAnswer(userAnswer) {
      const correctAnswer = this.fixedNumber * this.randomNumber;
      if (userAnswer === correctAnswer) {
        this.correctAnswers++;
        alert("Правильно!");
      } else {
        this.wrongAnswers++;
        alert(`Неправильно! Правильна відповідь: ${correctAnswer}`);
      }
    }

    render() {
      alert(
        `Результати перевірки таблиці множення на ${this.fixedNumber}:\nПравильних відповідей: ${this.correctAnswers}\nНеправильних відповідей: ${this.wrongAnswers}`
      );
    }

    startTest(numberOfQuestions) {
      for (let i = 0; i < numberOfQuestions; i++) {
        const question = this.generateExample();
        const userAnswer = parseInt(prompt(question));
        this.checkAnswer(userAnswer);
      }
      this.render();
    }
  }

  // Функція для запуску тестування з користувацькими параметрами
  function startMultChecker() {
    const fixedNumber = parseInt(prompt("Введіть число для таблиці множення:"));
    const numberOfQuestions = parseInt(prompt("Введіть кількість прикладів:"));

    if (
      !isNaN(fixedNumber) &&
      !isNaN(numberOfQuestions) &&
      numberOfQuestions > 0
    ) {
      const checker = new MultChecker(fixedNumber);
      checker.startTest(numberOfQuestions);
    } else {
      alert("Будь ласка, введіть коректні значення.");
    }
  }

  startMultChecker();
}
