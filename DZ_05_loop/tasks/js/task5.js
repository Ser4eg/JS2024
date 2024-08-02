/*Задача 5. 
Створити 10 елементів для введення цін продуктів
*/

for (let i = 1; i <= 10; i++) {
  document.write(`
    <div>
    <label for="product-${i}">Продукт №${i}</label>
    <input type="text" id="product-${i}" value="0">
    </div>
  `);
}
