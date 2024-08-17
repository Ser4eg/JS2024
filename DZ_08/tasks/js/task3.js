/*Задача 3. 
Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
*/
function getMeetsNameCount(names, currentName = "Іван") {
  let count = 0;
  for (let i = 0; i < names.length; i++) {
    if (names[i] === currentName) {
      count++;
    }
  }
  return count;
}

const studentNames = [
  "Сергій",
  "Іван",
  "Андрій",
  "Олександр",
  "Василь",
  "Іван",
];

document.write(
  `Масив імен учнів: ${studentNames}<br>Ім'я Іван зустрічається ${getMeetsNameCount(
    studentNames
  )} разів<br>`
);
