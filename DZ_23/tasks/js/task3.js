/*
Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.
*/
function* evenNumberGenerator(count) {
  let generated = 0;
  while (generated < count) {
      const num = Math.floor(Math.random() * 100); 
      if (num % 2 === 0) {
          yield num;
          generated++;
      }
  }
}

// Приклад використання
const generator = evenNumberGenerator(5);

for (const num of generator) {
  console.log(num);
}