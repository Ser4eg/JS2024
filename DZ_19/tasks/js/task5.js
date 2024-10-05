/*Задача 5. 
Відображаємо картки товарів, які користувач може вибирати. 
Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)
*/

window.onload = () => {
  const products = [
    { id: 1, name: "Товар 1" },
    { id: 2, name: "Товар 2" },
    { id: 3, name: "Товар 3" },
    { id: 4, name: "Товар 4" },
    { id: 5, name: "Товар 5" },
    { id: 6, name: "Товар 6" },
    { id: 7, name: "Товар 7" },
    { id: 8, name: "Товар 8" },
    { id: 9, name: "Товар 9" },
    { id: 10, name: "Товар 10" },
  ];

  function createProductCards(productList) {
    const container = document.getElementById("productContainer");

    productList.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.textContent = product.name;

      card.addEventListener("click", () => {
        card.classList.toggle("selected");
      });

      container.appendChild(card);
    });
  }

  if (confirm("Почати тестування?")) {
    createProductCards(products);
  }
};
