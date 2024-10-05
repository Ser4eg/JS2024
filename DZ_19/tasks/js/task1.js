/*Задача 1. 
Дано 10 рядків тексту «Hello!» у окремих div. 
При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.
*/

window.onload = () => {
  function createDivElements(numberElements, textValue) {
    let container = document.getElementById("divContainer");

    if (!container) {
      container = document.createElement("div");
      container.id = "divContainer";
      container.className = "container";
      document.body.appendChild(container);
    }

    container.innerHTML = "";

    for (let i = 0; i < numberElements; i++) {
      const newDiv = document.createElement("div");
      newDiv.textContent = textValue;
      newDiv.className = "text-div";
      container.appendChild(newDiv);
    }

    addClickEventToDivs("text-div");
  }

  function addClickEventToDivs(className) {
    const textDivs = document.querySelectorAll(`.${className}`);

    textDivs.forEach((div, index) => {
      div.addEventListener("click", () => {
        textDivs.forEach((el) => {
          el.style.backgroundColor = "";
        });

        for (let i = index + 1; i < textDivs.length; i++) {
          textDivs[i].style.backgroundColor = "red";
        }
      });
    });
  }

  if (confirm("Почати тестування?")) {
    createDivElements(10, "Hello!");
  }
};
