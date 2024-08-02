/*Задача 1. 
Поступово генерувати 100 випадкових чисел від 1 до 1000. 
Підрахувати яких чисел більше: парних чи непарних.
*/

// вхідні дані
const numberCount = 100;
let evenCount = 0;
let oddCount = 0;

// цикл генеруваня випадкових чисел
for (let i = 0; i < numberCount; i++) {
  let randomNumber = Math.floor(Math.random() * 1000) + 1;

  // алгоритм перевірки, чи є число парним або непарним та підрахунок кільксоті тих чи інших
  if (randomNumber % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

// вихідні дані
if (evenCount > oddCount) {
  alert(`Парних чисел більше. Парних: ${evenCount}, Непарних: ${oddCount}`);
} else if (oddCount > evenCount) {
  alert(`Непарних чисел більше. Парних: ${evenCount}, Непарних: ${oddCount}`);
} else {
  alert(
    `Парних і непарних чисел однакова кількість. Парних: ${evenCount}, Непарних: ${oddCount}`
  );
}
