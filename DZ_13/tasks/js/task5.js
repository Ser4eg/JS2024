/*Задача 5. 
З використанням замикань розробити ітератор, тобто функцію, 
що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. 
Якщо значення досягне максимального, то наступним буде мінімальне значення. 
З використанням цієї функції реалізувати перебір номерів місяців. 
*/

function createIterator(min, max) {
  let current = min - 1;
  return function () {
    current++;
    if (current > max) {
      current = min;
    }
    return current;
  };
}

if (confirm("Почати тестування?")) {
  const monthIterator = createIterator(1, 12);
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
  console.log(monthIterator());
}
