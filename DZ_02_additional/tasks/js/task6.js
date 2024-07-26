/* Задача 6. 
З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
Обчислити вартість кожного товару окремо та загальну вартість. 
Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
*/

// Вхідні дані
let productPrice1 = parseFloat(prompt("Вкажіть вартість першого товару:", '10'));
let productCount1 = parseInt(prompt("Вкажіть кількість одиниць першого товару:", '1'));
let productPrice2 = parseFloat(prompt("Вкажіть вартість другого товару:", '20'));
let productCount2 = parseInt(prompt("Вкажіть кількість одиниць другого товару:", '2'));
let productPrice3 = parseFloat(prompt("Вкажіть вартість третього товару:", '30'));
let productCount3 = parseInt(prompt("Вкажіть кількість одиниць третього товару:", '3'));

// обчислення
let totalPrice1 = productPrice1 * productCount1;
let totalPrice2 = productPrice2 * productCount2;
let totalPrice3 = productPrice3 * productCount3;

const grandTotal = totalPrice1 + totalPrice2 + totalPrice3;

// вивід результату
const check = `
  <h1>Загальний чек</h1>
  <hr>
  <p>Товар 1: ${productCount1} шт. x ${productPrice1.toFixed(2)} = ${totalPrice1.toFixed(2)} грн</p>
  <p>Товар 2: ${productCount2} шт. x ${productPrice2.toFixed(2)} = ${totalPrice2.toFixed(2)} грн</p>
  <p>Товар 3: ${productCount3} шт. x ${productPrice3.toFixed(2)} = ${totalPrice3.toFixed(2)} грн</p>
  <hr>
  <h3>Загальна вартість: ${grandTotal.toFixed(2)} грн</h3>
`;

document.write(check);