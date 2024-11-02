/*Задача 2. 
Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.
*/

// Завантаження справ із localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return tasks;
}

// Збереження справ у localStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Додавання нової справи
function addTask() {
  const taskInput = document.getElementById("task-input");
  const task = taskInput.value.trim();

  if (task) {
      const tasks = loadTasks();
      tasks.push(task);
      saveTasks(tasks);
      taskInput.value = "";
      renderTasks();
  }
}

// Відображення списку справ на сторінці
function renderTasks() {
  const tasks = loadTasks();
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Очистка списку

  tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;
      taskList.appendChild(li);
  });
}

// Вибір випадкової справи та її видалення після підтвердження
function suggestRandomTask() {
  const tasks = loadTasks();
  if (tasks.length === 0) return;

  const randomIndex = Math.floor(Math.random() * tasks.length);
  const randomTask = tasks[randomIndex];

  if (confirm(`Виконати цю справу: "${randomTask}"?`)) {
      tasks.splice(randomIndex, 1);
      saveTasks(tasks);
      renderTasks();
  }
}

// Автоматична пропозиція справи кожні 10 секунд
setInterval(suggestRandomTask, 10000);

// Завантаження справ при запуску сторінки
document.addEventListener("DOMContentLoaded", renderTasks);