/*Задача 2.
З клавіатури вводиться ціна товару і кількість грошей. 
Якщо грошей не вистачає то відмовляємо у покупці, 
інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4грн.
*/

// отримуєм дані
let productPrice = parseFloat(prompt("Введіть ціну товара:", "10.5"));
let money = parseFloat(prompt("Введіть кількість грошей:", "15"));
let remainder = money - productPrice;
const lotteryPrice = 4;

let result = "";

// розрахунок
if (productPrice > money) {
  result = "Відмова. Не вистачає грошей";
} else if (productPrice + lotteryPrice <= money) {
  result = `Пропонуємо купити лотерею за ${lotteryPrice.toFixed(2)}грн. Після придбання лотереї, ваша решта буде складати ${(remainder - lotteryPrice).toFixed(2)}грн.`;
} else {
  result = `Товар придбано, але коштів на придбання лотереї не вистачає. Ваша решта буде складати ${remainder.toFixed(2)}грн.`;
}

// вивід результату
document.write(`
  <h1>Результат обчислення:</h1>
  <p>${result}</p>
`);