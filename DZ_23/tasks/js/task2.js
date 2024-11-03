/*Задача 2. 
Задача 2. Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
*/
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Shop {
  constructor(products) {
    this.products = products;
  }

  [Symbol.iterator]() {
    let index = 0;
    const products = this.products;
    return {
      next() {
        if (index < products.length) {
          const product = products[index++];
          const totalCost = product.price * product.quantity;
          const value = `${product.name} - ${totalCost} грн`;
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const products = [
  new Product("Яблуко", 10, 5),
  new Product("Банан", 15, 3),
  new Product("Апельсин", 20, 2),
];

const shop = new Shop(products);

for (const item of shop) {
  console.log(item);
}
