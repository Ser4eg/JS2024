/*Задача 5. 
Дано послідовність оцінок учня. Підрахувати кількість:
1)	двійок
2)	кількість хороших оцінок (добре, відмінно);
3)	кількість оцінок, які нижче середнього.
*/

function getAverageScoreOfStudent(studentScore) {
  const totalScore = studentScore.reduce((acc, score) => acc + score, 0);
  return totalScore / studentScore.length;
}

function getScoreTwoCount(studentScore) {
  let count = 0;
  for (let i = 0; i < studentScore.length; i++) {
    if (studentScore[i] === 2) {
      count++;
    }
  }
  return count;
}

function getScoreGoodCount(studentScore) {
  let count = 0;
  for (let i = 0; i < studentScore.length; i++) {
    if (studentScore[i] === 4 || studentScore[i] === 5) {
      count++;
    }
  }
  return count;
}

function getScoreBelowAverageCount(studentScore) {
  let count = 0;
  let averageScore = getAverageScoreOfStudent(studentScore);
  for (let i = 0; i < studentScore.length; i++) {
    if (studentScore[i] < averageScore) {
      count++;
    }
  }
  return count;
}

const studentScore = [2, 3, 4, 5, 4];

document.write(
  `Дано послідовність оцінок учня: ${studentScore}. Сердній бал складає ${getAverageScoreOfStudent(
    studentScore
  ).toFixed(2)}<hr>
  Кількість оцінок "двійок" - ${getScoreTwoCount(studentScore)}<br>
  Кількість хороших оцінок (добре, відмінно) - ${getScoreGoodCount(
    studentScore
  )}<br>
  Кількість оцінок, які нижче середнього балу - ${getScoreBelowAverageCount(
    studentScore
  )}<br>  
  `
);
