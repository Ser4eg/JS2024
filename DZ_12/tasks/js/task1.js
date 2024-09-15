/*Задача 1. 
Дано масив 30 випадкових цілих чисел. 
Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою
*/

function getRandomNumber(min = 1, max = 15) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getNewArray(length = 30) {
  return Array.from({ length }, () => getRandomNumber());
}

function bubbleSortWithStats(arr) {
  let arrLength = arr.length;
  let comparisons = 0;
  let swaps = 0;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arrLength - 1; i++) {
      comparisons++;
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swaps++;
        swapped = true;
      }
    }

    arrLength--;
  } while (swapped);

  return { sortedArray: arr, comparisons, swaps };
}


if (confirm("Почати тестування?")) {
  const length = parseInt(
    prompt("Вкажіть кількість елементів масива", "30")
  );
  const randomArray = getNewArray(length);
  const initialArray = Array.from(randomArray)
  const result = bubbleSortWithStats(randomArray);

  document.write(
    `
    Створено масив: ${JSON.stringify(initialArray)}<br>
    Відсортований масив: ${JSON.stringify(result.sortedArray)}<br>
    Кількість порівнянь: ${result.comparisons}<br>
    Кількість обмінів: ${result.swaps}<br>    
    `
  );
}