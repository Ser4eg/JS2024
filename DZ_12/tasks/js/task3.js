/*Задача 3. 
Дано масив 30 випадкових цілих чисел. 
Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.
*/

function getRandomNumber(min = 1, max = 15) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getNewArray(length = 30) {
  return Array.from({ length }, () => getRandomNumber());
}

function insertionSortWithStats(arr) {
  let comparisons = 0;
  let swaps = 0;

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      comparisons++;
      arr[j + 1] = arr[j];
      swaps++;
      j--;
    }

    comparisons++;
    arr[j + 1] = current;
  }

  return { sortedArray: arr, comparisons, swaps };
}

if (confirm("Почати тестування?")) {
  const length = parseInt(prompt("Вкажіть кількість елементів масива", "30"));
  const randomArray = getNewArray(length);
  const initialArray = Array.from(randomArray);
  const result = insertionSortWithStats(randomArray);

  document.write(
    `
    Створено масив: ${JSON.stringify(initialArray)}<br>
    Відсортований масив: ${JSON.stringify(result.sortedArray)}<br>
    Кількість порівнянь: ${result.comparisons}<br>
    Кількість обмінів: ${result.swaps}<br>    
    `
  );
}
