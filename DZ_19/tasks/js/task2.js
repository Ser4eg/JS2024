/*Задача 2. 
Дано 5 елементів input. 
При введенні значення у якийсь із них необхідно автоматично заповнювати інші 
(усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), 
усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
*/

window.onload = () => {
  function createInputElements(numberElements, type, placeholder) {
    let container = document.querySelector(".conainer");

    if (!container) {
      container = document.createElement("div");
      container.className = "container";
      document.body.appendChild(container);
    }

    container.innerHTML = "";

    for (let i = 0; i < numberElements; i++) {
      const newInput = document.createElement("input");
      newInput.type = type;
      newInput.placeholder = placeholder;
      newInput.className = "input-field";
      container.appendChild(newInput);
    }

    addClickEventToInputs("input-field");
  }

  function addClickEventToInputs(className) {
    const inputFields = document.querySelectorAll(`.${className}`);

    inputFields.forEach((input, index) => {
      input.addEventListener("input", () => {
        let currentValue = parseInt(input.value);

        if (isNaN(currentValue)) return;

        for (let i = index - 1; i >= 0; i--) {
          currentValue--;
          inputFields[i].value = currentValue;
        }

        currentValue = parseInt(input.value);
        for (let i = index + 1; i < inputFields.length; i++) {
          currentValue++;
          inputFields[i].value = currentValue;
        }
      });
    });
  }

  if (confirm("Почати тестування?")) {
    createInputElements(5, "number", "Вкажіть число");
  }
};
