/*Задача 9.
Дано масив імен. 
Сформувати масив з перших літер цих імен.
*/

function getFirstLetterOfNames(names) {
  const array = names.map((name) => name.charAt(0));
  return array;
}

const names = ["Сергій", "Іван", "Андрій", "Олександр", "Василь", "Іван"];

if (confirm("Почати тестування?")) {
  alert(
    `Дано масив імен.: ${names}.\nНовий масив з перших літер цих імен: ${getFirstLetterOfNames(
      names
    )}`
  );
}
