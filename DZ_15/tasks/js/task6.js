/*Задача 6. 
Розробити клас «Керівник танців»
Поля
Масив імен хлопців
Масив імен дівчат
Методи
Метод випадкового вибору імені хлопця
Метод випадкового вибору імені дівчини
Метод виведення пари для танців
Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
*/

if (confirm("Почати тестування? Результати у консолі")) {
  class DanceManager {
    constructor(boys, girls) {
      this.boys = boys;
      this.girls = girls;
    }

    getRandomBoy() {
      const randomIndex = Math.floor(Math.random() * this.boys.length);
      return this.boys[randomIndex];
    }

    getRandomGirl() {
      const randomIndex = Math.floor(Math.random() * this.girls.length);
      return this.girls[randomIndex];
    }

    displayDancePair() {
      const boy = this.getRandomBoy();
      const girl = this.getRandomGirl();
      console.log(`Танцює пара: ${boy} і ${girl}`);
    }

    run() {
      this.displayDancePair();
      setInterval(() => {
        this.displayDancePair();
      }, 5000);
    }
  }

  const boys = ["Олег", "Іван", "Андрій", "Микола", "Василь"];
  const girls = ["Оля", "Наталя", "Марія", "Анна", "Катерина"];

  const danceManager = new DanceManager(boys, girls);
  danceManager.displayDancePair();

  if (confirm("Запустити зміну пари кожні 5 секунд?")) {
    danceManager.run();
  }
}
