/*Задача 1. 
Користувач може змінювати колір фону, що вибирає користувач з використанням
<input type="color">.
Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.
*/
document.addEventListener("DOMContentLoaded", () => {
  // Завантажуємо збережений колір і кількість змін
  const colorPicker = document.getElementById("color-picker");
  const colorInfo = document.getElementById("color-info");

  // Отримуємо збережений колір і кількість змін із localStorage
  let savedColor = localStorage.getItem("backgroundColor");
  let changeCount = sessionStorage.getItem("changeCount");

  // Встановлюємо збережений колір, якщо він є
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }

  // Ініціалізуємо лічильник змін, якщо його ще немає
  changeCount = changeCount ? parseInt(changeCount) : 0;
  colorInfo.textContent = `Кількість змін кольору: ${changeCount}`;

  // Обробник події для зміни кольору
  colorPicker.addEventListener("input", () => {
    const selectedColor = colorPicker.value;

    // Змінюємо колір фону
    document.body.style.backgroundColor = selectedColor;

    // Зберігаємо вибраний колір в localStorage
    localStorage.setItem("backgroundColor", selectedColor);

    // Збільшуємо лічильник змін кольору та зберігаємо його в sessionStorage
    changeCount += 1;
    sessionStorage.setItem("changeCount", changeCount);

    // Оновлюємо відображення кількості змін
    colorInfo.textContent = `Кількість змін кольору: ${changeCount}`;
  });
});
