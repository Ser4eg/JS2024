/*Задача 2. 
Розробити функцію, у яку передають об’єкт (день, місяць, рік). 
Визначити, який буде рік через N місяців.
*/

if (confirm("Почати тестування?")) {
  function getYearAfterMonths(dateObj, monthsToAdd) {
    const { day, month, year } = dateObj;

    // Створюємо нову дату
    let date = new Date(year, month - 1, day);

    // Додаємо N місяців до дати
    date.setMonth(date.getMonth() + monthsToAdd);

    // Повертаємо новий рік
    return date.getFullYear();
  }

  const initialDate = { day: 17, month: 9, year: 2024 };
  const monthsToAdd = 16;

  const newYear = getYearAfterMonths(initialDate, monthsToAdd);
  alert(`Новий рік: ${newYear}`);
}
