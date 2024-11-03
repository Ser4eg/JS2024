/*
Задача 8.
Дано масив показів температур. Підрахувати кількість входжень кожного з показів. Заокруглити вгору значення та підрахувати кількість різних показів.
*/

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];

// Підрахунок входжень кожної температури
let tempCounts = new Map();
for (let temp of temperatures) {
  tempCounts.set(temp, (tempCounts.get(temp) || 0) + 1);
}

// Заокруглення та підрахунок кількості різних значень
let roundedTemps = new Set(temperatures.map((temp) => Math.ceil(temp)));

console.log("Кількість входжень кожного показу:", tempCounts);
console.log("Кількість різних заокруглених показів:", roundedTemps.size);
