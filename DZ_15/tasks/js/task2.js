/*Задача 2. 
Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
Поля(властивості)
Масив, у якому зберігається поле з зайцями
Методи (дії)
Метод пострілу (задається позиція пострілу)
Виведення ігрового поля
*/

if (confirm("Почати тестування?")) {
  let polygon = {
    field: [
      [1, 0, 0, 1],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 0],
    ],

    getField: function () {
      console.log("Ігрове поле:");
      this.field.forEach((row) => {
        console.log(row.join(" "));
      });
    },

    shoot: function (x, y) {
      if (
        x >= 0 &&
        x < this.field.length &&
        y >= 0 &&
        y < this.field[0].length
      ) {
        if (this.field[x][y] === 1) {
          console.log(`Влучили у зайця на позиції (${x}, ${y})!`);
        } else {
          console.log(`Промах! На позиції (${x}, ${y}) зайця не було.`);
        }
      } else {
        console.log("Неправильна позиція пострілу!");
      }
    },
  };

  polygon.shoot(0, 0);
  polygon.shoot(2, 1);
  polygon.shoot(1, 1);
  polygon.shoot(0, 2);

  polygon.getField();
}
