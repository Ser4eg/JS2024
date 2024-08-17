/*Задача 1. 
Дано масив, який містить оцінки з К предметів.
Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), 
хорошист (оцінки добре і відмінно), 
трійочник(є хоча би одна трійка)).
*/

function getAverageScoreOfStudent(scoresArr) {
  const totalScore = scoresArr.reduce((acc, score) => acc + score, 0);
  return totalScore / scoresArr.length;
}

function getCategoryOfStudent(scoresArr) {
  let category = "відмінник";

  if (scoresArr.includes(2)) {
    category = "двійочник";
  } else if (scoresArr.includes(3)) {
    category = "трійочник";
  } else if (scoresArr.every((score) => score >= 4 && score <= 5)) {
    category = "хорошист";
  }

  return category;
}

let subjectsNumber = parseInt(prompt("Вкажіть кількість предметів:", "5"));
let scoresOfSubjects = [];

do {
  let score = parseInt(
    prompt(`Вкажіть оцінку: (залишилось ввести ${subjectsNumber} оцінок)`, "5")
  );
  scoresOfSubjects.push(score);
  subjectsNumber--;
} while (subjectsNumber > 0);

document.write(
  `Стедент має такі осінки: ${scoresOfSubjects}<br>
  Середній бал складає: ${getAverageScoreOfStudent(scoresOfSubjects).toFixed(2)}
  <br>Категорія студента: ${getCategoryOfStudent(scoresOfSubjects)}<hr>`
);
