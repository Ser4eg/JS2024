/*Задача 4. 
З клавіатури вводиться вік людини. 
Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
*/

// отримуєм дані
let userAge = parseInt(prompt("Введіть ваш вік:", "37"));

// алгоритм з використанням switch case
switch (true) {
  case userAge >= 0 && userAge <= 6:
    alert("Ваш статус віку - дитина у садочку.");
    break;
  case userAge >= 7 && userAge <= 17:
    alert("Ваш статус віку - школяр.");
    break;
  case userAge >= 18 && userAge <= 22:
    alert("Ваш статус віку - студент.");
    break;
  case userAge >= 23 && userAge <= 64:
    alert("Ваш статус віку - працівник.");
    break;
  case userAge >= 65 && userAge <= 80:
    alert("Ваш статус віку - пенсіонер.");
    break;
  case userAge >= 81 && userAge <= 100:
    alert("Ваш статус віку - людина похилого віку.");
    break;
  default:
    alert(
      "Статус віку невідомо! Можливо ви помилились з вказанням вашого віку"
    );
    break;
}
