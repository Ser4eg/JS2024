/*Задача 5. 
З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
Вивести на екран назву транспортного засобу, яким він може керувати.
*/

// отримуєм дані
let categoryCode = prompt("Введіть назву категорії A,B,C(латиниця):", "A");

// алгоритм
if (categoryCode.toUpperCase() === "A")
  alert("Вам дозволено керувати мотоциклом");
if (categoryCode.toUpperCase() === "B")
  alert("Вам дозволено керувати легковим автомобілем");
if (categoryCode.toUpperCase() === "C")
  alert("Вам дозволено керувати вантажним автомобілем");
if (categoryCode.toUpperCase() !== "A" && categoryCode.toUpperCase() !== "B" && categoryCode.toUpperCase() !== "C" )
  alert("Категорію не знайдено");