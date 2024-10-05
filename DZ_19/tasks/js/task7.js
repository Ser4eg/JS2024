/*Задача 7. 
 Відобразити падаючий сніг. 
 Сніжинка з’являється у верхній частині екрану (top =0) і з випадковою швидкістю рухається вниз 
 (у setInterval викликати метод, у якому додавати крок до top). 
 Як тільки сніжинка досягає нижньої частини екрану (top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).
*/

window.onload = () => {
  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const snowContainer = document.getElementById("snowContainer");
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    snowflake.style.left = `${Math.random() * maxWidth}px`;

    const fallSpeed = Math.random() * 2 + 1;

    snowContainer.appendChild(snowflake);

    let positionTop = 0;

    const fallInterval = setInterval(() => {
      positionTop += fallSpeed;
      snowflake.style.top = `${positionTop}px`;

      if (positionTop > maxHeight) {
        positionTop = 0;
        snowflake.style.left = `${Math.random() * maxWidth}px`;
      }
    }, 20);
  }

  function startSnowfall() {
    for (let i = 0; i < 50; i++) {
      createSnowflake();
    }
  }

  if (confirm("Почати тестування?")) {
    startSnowfall();
  }
};
