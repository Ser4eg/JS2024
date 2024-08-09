/*Задача 3. 
Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
*/

//============= Function Declaration===========================================
// function getWorkDay(dayNumber = 1) {
//   let workDay;

//   dayNumber < 6 ? (workDay = "Робочий день") : (workDay = "Вихідний день");

//   return workDay;
// }

//============= Arrow Function=================================================
const getWorkDay = (dayNumber = 1) =>
  dayNumber < 6 ? "Робочий день" : "Вихідний день";

let dayNumber = parseInt(prompt("Вкажіть номер дня (1-7)", "1"));
alert(getWorkDay(dayNumber));
