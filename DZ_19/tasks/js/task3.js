/*Задача 3. 
Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами
(кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). 
При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.
*/

window.onload = () => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createRandomLists(numLists) {
    const container = document.getElementById("listsContainer");

    for (let i = 0; i < numLists; i++) {
      const ol = document.createElement("ol");
      const numberOfItems = getRandomNumber(1, 10);

      for (let j = 0; j < numberOfItems; j++) {
        const li = document.createElement("li");
        li.textContent = getRandomNumber(1, 100);
        ol.appendChild(li);
      }

      container.appendChild(ol);
    }
  }

  function colorLists() {
    const lists = document.querySelectorAll("#listsContainer ol");

    lists.forEach((list) => {
      const itemCount = list.children.length;
      if (itemCount % 2 === 0) {
        list.classList.add("green");
        list.classList.remove("red");
      } else {
        list.classList.add("red");
        list.classList.remove("green");
      }
    });
  }

  if (confirm("Почати тестування?")) {
    createRandomLists(5);

    document
      .getElementById("colorButton")
      .addEventListener("click", colorLists);
  }
};
