/*Задача 6.
Дано послідовність цін товарів та назв (у окремих масивах). 
Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
*/

const productsPrices = [100, 150, 80, 500, 300, 1000];
const productsTitles = [
  "Печиво",
  "Олія",
  "Хліб",
  "Телефон",
  "Годинник",
  "Планшет",
];

const userMoney = parseFloat(prompt("Вкажіть кількість наявних грошей:", 350));

function getProductList(productsPrices, productsTitles, userMoney) {
  const productList = [];

  for (let i = 0; i < productsPrices.length; i++) {
    if (productsPrices[i] <= userMoney) {
      productList.push(
        `Товар ${productsTitles[i]} - Вартість ${productsPrices[i]} грн`
      );
    }
  }

  return productList;
}

document.write(`
  На ваші гроші ${userMoney} грн, можна придбати наступні товари: <br> ${getProductList(
  productsPrices,
  productsTitles,
  userMoney
)}
<br>`);
