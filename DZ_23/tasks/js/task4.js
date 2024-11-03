/*
Задача 4.
Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
*/

let ages = [16, 17, 16, 18, 17, 16, 19, 18, 17];
let ageCounts = new Map();

for (let age of ages) {
  ageCounts.set(age, (ageCounts.get(age) || 0) + 1);
}

let maxCount = Math.max(...ageCounts.values());

console.log("Кількість кожного віку:", ageCounts);
console.log("Максимальна кількість повторень:", maxCount);
