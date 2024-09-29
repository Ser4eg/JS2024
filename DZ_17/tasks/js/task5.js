/*Задача 5. 
Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), 
AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). 
Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів  
Приклад.
testsList= [
   {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
   {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
]
Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля. 
Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. 
Результати тестування додаються в об’єкт History.  
Зробити так, щоб об'єкт такого класу можна було створити тільки один. 
Коли зроблено ці N задач вивести усю історію на екран.
*/
class TestData {
  constructor(firstNum, secondNum, operation, userAnswer, correctAnswer) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
    this.operation = operation;
    this.userAnswer = userAnswer;
    this.correctAnswer = correctAnswer;
  }
}

class History {
  #testsList = [];

  // Додаємо результат тесту в історію
  addTest(testData) {
    if (testData instanceof TestData) {
      this.#testsList.push(testData);
    } else {
      throw new Error("Об'єкт має бути типу TestData");
    }
  }

  // Метод для виведення всієї історії
  displayHistory() {
    if (this.#testsList.length === 0) {
      console.log("Історія тестування порожня.");
      return;
    }
    console.log("Історія тестування:");
    this.#testsList.forEach((test, index) => {
      console.log(
        `${index + 1}. ${test.firstNum} ${test.operation} ${test.secondNum} = ${
          test.userAnswer
        } (Правильна відповідь: ${test.correctAnswer})`
      );
    });
  }
}

class MultChecker {
  static generateTest() {
    const firstNum = Math.floor(Math.random() * 10) + 1;
    const secondNum = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = firstNum * secondNum;
    const userAnswer = parseInt(
      prompt(`Скільки буде ${firstNum} * ${secondNum}?`)
    );
    return new TestData(firstNum, secondNum, "*", userAnswer, correctAnswer);
  }
}

class AddChecker {
  static generateTest() {
    const firstNum = Math.floor(Math.random() * 100) + 1;
    const secondNum = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = firstNum + secondNum;
    const userAnswer = parseInt(
      prompt(`Скільки буде ${firstNum} + ${secondNum}?`)
    );
    return new TestData(firstNum, secondNum, "+", userAnswer, correctAnswer);
  }
}

class TestManager {
  static #instance = null;
  #history = new History();
  #testCount;
  #intervalId;

  constructor(testCount) {
    if (TestManager.#instance) {
      throw new Error(
        "Об'єкт TestManager вже існує. Використовуйте TestManager.getInstance() для отримання екземпляра."
      );
    }
    this.#testCount = testCount;
    TestManager.#instance = this;
  }

  static getInstance(testCount) {
    if (!TestManager.#instance) {
      TestManager.#instance = new TestManager(testCount);
    }
    return TestManager.#instance;
  }

  // Метод для запуску тестування
  startTests() {
    let currentTest = 0;

    this.#intervalId = setInterval(() => {
      if (currentTest >= this.#testCount) {
        clearInterval(this.#intervalId);
        this.#history.displayHistory();
        return;
      }

      const test =
        Math.random() < 0.5
          ? MultChecker.generateTest()
          : AddChecker.generateTest();
      this.#history.addTest(test);
      currentTest++;
    }, 2000);
  }
}

if (confirm("Почати тестування?")) {
  try {
    const testManager = TestManager.getInstance(5);
    testManager.startTests();
  } catch (error) {
    console.error(error.message);
  }
}
