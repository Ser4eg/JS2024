/*Задача 2. 
Створити функцію, яка за номером місяця повертає його назву.
*/

function getMonthName(monthNumber = 1) {
  let monthName;

  switch (monthNumber) {
    case 1:
      monthName = "Січень";
      break;
    case 2:
      monthName = "Лютий";
      break;
    case 12:
      monthName = "Грудень";
      break;
    case 3:
      monthName = "Березень";
      break;
    case 4:
      monthName = "Квітень";
      break;
    case 5:
      monthName = "Травень";
      break;
    case 6:
      monthName = "Червень";
      break;
    case 7:
      monthName = "Липень";
      break;
    case 8:
      monthName = "Серпень";
      break;
    case 9:
      monthName = "Вересень";
      break;
    case 10:
      monthName = "Жовтень";
      break;
    case 11:
      monthName = "Листопад";
      break;

    default:
      monthName = "Вказаного номера місяця не існує";
      break;
  }

  return monthName;
}

let monthNumber = parseInt(prompt("Вкажіть номер місяця (1-12)", "1"));
alert(getMonthName(monthNumber));
