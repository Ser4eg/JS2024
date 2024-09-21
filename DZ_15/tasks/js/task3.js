/*Задача 3. 
Створити об’єкт «Авто». 
Поля(властивості)
Марка
Розмір бака
Кількість наявних літрів
Кількість місць
Кількість пасажирів
Методи (дії)
Заправка на вказану кількість літрів
Виведення кількості пасажирів
Додавання пасажирів
Висадка пасажирів
*/

if (confirm("Почати тестування?")) {
  let car = {
    brand: "BMW",
    volumeFuelReservuar: 50,
    currentFuel: 10,
    seats: 5,
    passengers: 2,

    refuel: function (liters) {
      if (this.currentFuel + liters > this.volumeFuelReservuar) {
        console.log(
          `Не можна заправити більше, ніж вміщує бак. Заправимо до повного бака ${
            this.volumeFuelReservuar - this.currentFuel
          } літрів.`
        );
        this.currentFuel = this.volumeFuelReservuar;
      } else {
        this.currentFuel += liters;
        console.log(
          `Заправлено ${liters} літрів. Тепер у баку ${this.currentFuel} літрів.`
        );
      }
    },

    getPassengers: function () {
      console.log(`У машині зараз ${this.passengers} пасажирів.`);
    },

    addPassengers: function (count) {
      if (this.passengers + count > this.seats) {
        console.log(
          `Не можна додати ${count} пасажирів. Вільних місць лише ${
            this.seats - this.passengers
          }.`
        );
      } else {
        this.passengers += count;
        console.log(
          `Додано ${count} пасажирів. Тепер у машині ${this.passengers} пасажирів.`
        );
      }
    },

    removePassengers: function (count) {
      if (this.passengers - count < 0) {
        console.log(
          `Не можна висадити більше пасажирів, ніж є в машині. Зараз в машині лише ${this.passengers} пасажирів.`
        );
      } else {
        this.passengers -= count;
        console.log(
          `Висаджено ${count} пасажирів. Тепер у машині ${this.passengers} пасажирів.`
        );
      }
    },
  };

  // Виведення кількості пасажирів
  car.getPassengers();

  // Заправка на 30 літрів
  car.refuel(30);
  // Заправка на 30 літрів, але така кількість не вміщається, буде заправлено до повного з розрахунком літрів що вміститься
  car.refuel(30);

  // Спроба додати 4 пасажирів (але місць недостатньо)
  car.addPassengers(4);

  // Додавання 3 пасажирів
  car.addPassengers(3);

  // Висадка 2 пасажирів
  car.removePassengers(2);
}
