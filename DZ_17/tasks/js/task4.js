/*Задача 4. 
Склад. 
База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). 
Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми
*/
class Warehouse {
  #products = [];

  // Метод для реєстрації товару
  registerProduct(productName, unit, quantity, firmName, registrationNumber) {
    if (typeof productName !== "string" || productName.trim() === "") {
      throw new Error("Некоректна назва товару!");
    }
    if (typeof unit !== "string" || unit.trim() === "") {
      throw new Error("Некоректна одиниця виміру!");
    }
    if (typeof quantity !== "number" || quantity <= 0) {
      throw new Error("Кількість повинна бути більше 0!");
    }
    if (typeof firmName !== "string" || firmName.trim() === "") {
      throw new Error("Некоректна назва фірми!");
    }
    if (
      typeof registrationNumber !== "string" ||
      registrationNumber.trim() === ""
    ) {
      throw new Error("Некоректний реєстраційний номер!");
    }

    // Перевірка, чи існує вже такий товар від тієї ж фірми
    const existingProduct = this.#products.find(
      (product) =>
        product.productName === productName &&
        product.firm.registrationNumber === registrationNumber
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      const newProduct = {
        productName,
        unit,
        quantity,
        firm: {
          firmName,
          registrationNumber,
        },
      };
      this.#products.push(newProduct);
    }
    console.log(
      `Товар "${productName}" від фірми "${firmName}" додано на склад.`
    );
  }

  // Метод для відвантаження товару
  dispatchProduct(productName, quantity) {
    const product = this.#products.find(
      (product) => product.productName === productName
    );

    if (!product) {
      throw new Error("Товар не знайдено на складі!");
    }
    if (product.quantity < quantity) {
      throw new Error("Недостатньо товару для відвантаження!");
    }

    product.quantity -= quantity;
    console.log(
      `Відвантажено ${quantity} ${product.unit} товару "${productName}".`
    );

    // Видаляємо товар, якщо його кількість стала нульовою
    if (product.quantity === 0) {
      this.#products = this.#products.filter((p) => p !== product);
      console.log(`Товар "${productName}" видалено зі складу.`);
    }
  }

  // Метод фільтрації за назвою товару
  filterByProductName(productName) {
    return this.#products.reduce((result, product) => {
      if (product.productName.includes(productName)) {
        result.push(product);
      }
      return result;
    }, []);
  }

  // Метод фільтрації за назвою фірми
  filterByFirmName(firmName) {
    return this.#products.reduce((result, product) => {
      if (product.firm.firmName.includes(firmName)) {
        result.push(product);
      }
      return result;
    }, []);
  }

  // Метод для виведення всіх товарів на складі
  displayProducts() {
    if (this.#products.length === 0) {
      console.log("Склад порожній.");
      return;
    }
    console.log("Товари на складі:");
    this.#products.forEach((product, index) => {
      console.log(
        `${index + 1}. ${product.productName} - ${product.quantity} ${
          product.unit
        } (Виробник: ${product.firm.firmName}, Реєстраційний номер: ${
          product.firm.registrationNumber
        })`
      );
    });
  }
}

if (confirm("Почати тестування?")) {
  try {
    const warehouse = new Warehouse();

    // Реєструємо товари
    warehouse.registerProduct("Молоко", "літр", 100, "Молокозавод", "001");
    warehouse.registerProduct("Хліб", "штука", 200, "Хлібокомбінат", "002");
    warehouse.registerProduct("Молоко", "літр", 50, "Молокозавод", "001");

    // Виводимо товари на складі
    warehouse.displayProducts();

    // Відвантаження товару
    warehouse.dispatchProduct("Молоко", 120);

    // Виводимо товари на складі після відвантаження
    warehouse.displayProducts();

    // Фільтрація за назвою товару
    const milkProducts = warehouse.filterByProductName("Молоко");
    console.log('Фільтр за назвою товару "Молоко":', milkProducts);

    // Фільтрація за назвою фірми
    const breadCompanyProducts = warehouse.filterByFirmName("Хлібокомбінат");
    console.log(
      'Фільтр за назвою фірми "Хлібокомбінат":',
      breadCompanyProducts
    );
  } catch (error) {
    console.error(error.message);
  }
}
