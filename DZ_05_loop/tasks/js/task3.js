/*Задача 3. 
Вивести на екран 8 кнопок з написом “Hello”.
*/

for (let i = 1; i <= 8; i++) {
  document.write(`<div><button type="button" data-btn-index="${i}">Кнопка №${i}</button></div>`);
}
