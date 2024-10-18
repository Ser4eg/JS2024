/*Задача 1. 
Розробити ToDo менеджер. 
Користувач вводить текст задачі та пріоритетність. 
Відображається список доданих задач з можливістю видалення задач та сортування за пріоритетністю.
*/
// Масив для зберігання всіх списків задач
let todoLists = [];

// Отримуємо елементи з DOM
const listsContainer = document.getElementById("listsContainer");
const newListInput = document.getElementById("newListInput");
const createListButton = document.getElementById("createListButton");

// Функція для створення нового списку задач
function createNewList() {
  const listName = newListInput.value.trim();
  if (listName === "") {
    alert("Введіть назву списку!");
    return;
  }

  // Створюємо новий об'єкт списку
  const newList = {
    name: listName,
    tasks: [],
  };
  todoLists.push(newList);

  // Очищуємо поле вводу
  newListInput.value = "";

  // Оновлюємо список контейнерів
  renderLists();
}

// Функція для відображення всіх списків
function renderLists() {
  listsContainer.innerHTML = "";

  todoLists.forEach((list, listIndex) => {
    const listContainer = document.createElement("div");
    listContainer.className = "list-container";

    const listTitle = document.createElement("h2");
    listTitle.textContent = list.name;
    listContainer.appendChild(listTitle);

    // Додаємо кнопку для видалення списку
    const deleteListButton = document.createElement("button");
    deleteListButton.textContent = "Видалити список";
    deleteListButton.className = "delete-button";
    deleteListButton.addEventListener("click", () => deleteList(listIndex));
    listContainer.appendChild(deleteListButton);

    const taskList = document.createElement("ul");
    taskList.className = "todo-list";
    listContainer.appendChild(taskList);

    // Відображаємо задачі у списку
    list.tasks.forEach((task, taskIndex) => {
      const listItem = document.createElement("li");
      listItem.className = "todo-item";

      if (task.priority === 1) {
        listItem.classList.add("high-priority");
      } else if (task.priority === 2) {
        listItem.classList.add("medium-priority");
      } else {
        listItem.classList.add("low-priority");
      }

      listItem.textContent = `${task.text} (Пріоритет: ${task.priority})`;

      // Кнопка видалення задачі
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Видалити";
      deleteButton.className = "delete-button";
      deleteButton.addEventListener("click", () =>
        deleteTask(listIndex, taskIndex)
      );
      listItem.appendChild(deleteButton);

      // Кнопка перенесення задачі в інший список
      const moveButton = document.createElement("button");
      moveButton.textContent = "Перенести";
      moveButton.className = "move-button";
      moveButton.addEventListener("click", () =>
        moveTask(listIndex, taskIndex)
      );
      listItem.appendChild(moveButton);

      taskList.appendChild(listItem);
    });

    // Введення задачі та вибір пріоритету
    const inputContainer = document.createElement("div");
    inputContainer.className = "todo-input";

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "Введіть задачу";
    inputContainer.appendChild(taskInput);

    const prioritySelect = document.createElement("select");
    prioritySelect.innerHTML = `
            <option value="1">Високий пріоритет</option>
            <option value="2">Середній пріоритет</option>
            <option value="3">Низький пріоритет</option>
        `;
    inputContainer.appendChild(prioritySelect);

    const addButton = document.createElement("button");
    addButton.textContent = "Додати задачу";
    addButton.addEventListener("click", () =>
      addTask(listIndex, taskInput.value, prioritySelect.value)
    );
    inputContainer.appendChild(addButton);

    listContainer.appendChild(inputContainer);

    // Кнопки сортування
    const sortAlphabetButton = document.createElement("button");
    sortAlphabetButton.textContent = "Сортувати за алфавітом";
    sortAlphabetButton.addEventListener("click", () =>
      sortTasksAlphabetically(listIndex)
    );
    listContainer.appendChild(sortAlphabetButton);

    const sortPriorityButton = document.createElement("button");
    sortPriorityButton.textContent = "Сортувати за пріоритетом";
    sortPriorityButton.addEventListener("click", () =>
      sortTasksByPriority(listIndex)
    );
    listContainer.appendChild(sortPriorityButton);

    listsContainer.appendChild(listContainer);
  });
}

// Функція для додавання задачі в список
function addTask(listIndex, taskText, taskPriority) {
  if (taskText.trim() === "") {
    alert("Введіть задачу!");
    return;
  }

  const task = {
    text: taskText,
    priority: parseInt(taskPriority),
  };

  todoLists[listIndex].tasks.push(task);
  renderLists();
}

// Функція для видалення задачі
function deleteTask(listIndex, taskIndex) {
  todoLists[listIndex].tasks.splice(taskIndex, 1);
  renderLists();
}

// Функція для видалення списку
function deleteList(listIndex) {
  todoLists.splice(listIndex, 1);
  renderLists();
}

// Функція для перенесення задачі в інший список
function moveTask(listIndex, taskIndex) {
  const task = todoLists[listIndex].tasks.splice(taskIndex, 1)[0];
  const targetListIndex = prompt(
    "Введіть індекс списку, куди перенести задачу (0, 1, 2, ...):"
  );

  if (
    targetListIndex >= 0 &&
    targetListIndex < todoLists.length &&
    targetListIndex !== listIndex
  ) {
    todoLists[targetListIndex].tasks.push(task);
  } else {
    alert("Некоректний індекс списку.");
  }

  renderLists();
}

// Функція для сортування задач за алфавітом
function sortTasksAlphabetically(listIndex) {
  todoLists[listIndex].tasks.sort((a, b) => a.text.localeCompare(b.text));
  renderLists();
}

// Функція для сортування задач за пріоритетом
function sortTasksByPriority(listIndex) {
  todoLists[listIndex].tasks.sort((a, b) => a.priority - b.priority);
  renderLists();
}

// Додаємо обробник події для створення нового списку
createListButton.addEventListener("click", createNewList);
