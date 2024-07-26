/*
З клавіатури вводиться розмір заробітної плати та розмір прожиткового мінімуму. 
Визначити розмір соціальної допомоги (ввжаємо, що заробітна плата є меншою).
*/
const button = document.getElementById("calculateButton");

button.addEventListener("click", function () {
  // Отримання введених значень
  let salary = parseFloat(document.getElementById("salary").value);
  let minimum = parseFloat(document.getElementById("minimum").value);

  // Перевірка на коректність введених даних
  if (isNaN(salary) || isNaN(minimum) || salary < 0 || minimum < 0) {
    document.getElementById("result").innerHTML =
      "<p>Будь ласка, введіть коректні дані.</p>";
    return;
  }

  // Перевірка, чи заробітна плата менша за прожитковий мінімум
  if (salary >= minimum) {
    document.getElementById("result").innerHTML =
      "<p>Заробітна плата більша за прожитковий мінімум. Соціальна допомога не надається.</p>";
    return;
  }

  // Обчислення розміру соціальної допомоги
  let socialAssistance = minimum - salary;

  // Виведення результату
  document.getElementById("result").innerHTML =
    "<p>Розмір соціальної допомоги: " +
    socialAssistance.toFixed(2) +
    " грн</p>";
});
