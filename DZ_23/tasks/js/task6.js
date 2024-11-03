/*
Задача 6.
Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
*/

let visitors = ["user1", "user2", "user1", "user3", "user2", "user1"];

let visitCounts = new Map();

for (let visitor of visitors) {
  visitCounts.set(visitor, (visitCounts.get(visitor) || 0) + 1);
}

console.log("Кількість відвідувань для кожного клієнта:", visitCounts);
