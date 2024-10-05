/*Задача 6. 
Дано список спортсменів. 
Потрібно сформувати список тих, які будуть брати участь у змаганні. 
При цьому є два стовпці. 
В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. 
При натисканні на зелену стрілку спортсмен переміщається у список для змагань. 
При натисканні на червону стрілку спортсмен переміщається у загальний список.
*/
window.onload = () => {
  const athletes = [
    "Олег Верняєв",
    "Жан Беленюк",
    "Ярослава Магучіх",
    "Дар'я Білодід",
    "Олександр Абраменко",
    "Ольга Харлан",
  ];

  const generalList = document.getElementById("generalList");
  const selectedList = document.getElementById("selectedList");

  function createListItem(name, isSelected) {
    const listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.textContent = name;

    const arrow = document.createElement("span");
    arrow.className = `arrow ${isSelected ? "red-arrow" : "green-arrow"}`;
    arrow.textContent = isSelected ? "←" : "→";

    arrow.addEventListener("click", () => {
      if (isSelected) {
        generalList.appendChild(createListItem(name, false));
        selectedList.removeChild(listItem);
      } else {
        selectedList.appendChild(createListItem(name, true));
        generalList.removeChild(listItem);
      }
    });

    listItem.appendChild(arrow);
    return listItem;
  }

  function populateGeneralList() {
    athletes.forEach((athlete) => {
      generalList.appendChild(createListItem(athlete, false));
    });
  }

  if (confirm("Почати тестування?")) {
    populateGeneralList();
  }
};
