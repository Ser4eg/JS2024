/*Задача 7. 
Подорож складається з 3 етапів. 
На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), 
харчування (сніданок, обід, вечеря – checkbоx) 
та одного з 3-х гідів(використати  - radio buttons). 
Ціни визначте самі. 
Підрахувати загальну вартість.
*/

function calculateTotal() {
  let totalCost = 0;

  for (let stage = 1; stage <= 3; stage++) {
    const transport = document.querySelector(
      `select[name="transport${stage}"]`
    ).value;
    totalCost += parseFloat(transport);

    const meals = document.querySelectorAll(
      `input[name="meal${stage}"]:checked`
    );
    meals.forEach((meal) => {
      totalCost += parseFloat(meal.value);
    });

    const guide = document.querySelector(
      `input[name="guide${stage}"]:checked`
    ).value;
    totalCost += parseFloat(guide);
  }

  document.getElementById("totalCost").textContent = `${totalCost} грн`;
}
