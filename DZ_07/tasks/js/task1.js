/*Задача 1. 
Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
*/

function getSeasonName(monthNumber = 1) {
  let seasonName;

  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      seasonName = "Зима";
      break;
    case 3:
    case 4:
    case 5:
      seasonName = "Весна";
      break;
    case 6:
    case 7:
    case 8:
      seasonName = "Літо";
      break;
    case 9:
    case 10:
    case 11:
      seasonName = "Осінь";
      break;

    default:
      seasonName = "Вказаного номера місяця не існує";
      break;
  }

  return seasonName;
}

let monthNumber = parseInt(prompt("Вкажіть номер місяця (1-12)", "1"));
alert(getSeasonName(monthNumber));
