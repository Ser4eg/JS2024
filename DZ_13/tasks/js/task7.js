/*Задача 7. 
Тренажер додавання. 
Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
*/

if (confirm("Почати тестування?")) {
  let correctAnswer;
  let timerId;

  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    correctAnswer = num1 + num2;

    document.getElementById(
      "question"
    ).innerText = `Скільки буде ${num1} + ${num2}?`;
    document.getElementById("input").value = "";
    document.getElementById("feedback").innerText = "";
  }

  function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("input").value);

    if (userAnswer === correctAnswer) {
      document.getElementById("feedback").innerText = "Правильно!";
    } else {
      document.getElementById("feedback").innerText =
        "Неправильно. Спробуйте ще раз!";
    }
  }

  function startTimer() {
    generateQuestion();
    timerId = setInterval(generateQuestion, 10000);
  }

  document.getElementById("submit").addEventListener("click", checkAnswer);

  startTimer();
}
