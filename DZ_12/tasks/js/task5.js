/*Задача 5. 
Дано масив імен. 
Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
*/

// Сортування масиву методом бульбашки
function bubbleSort(arr) {
  let swapped;
  let comparisons = 0;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      comparisons++;
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Бінарний пошук
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

if (confirm("Почати тестування?")) {
  let result = "";
  let namesArray = [
    "Ivan",
    "Maria",
    "Olga",
    "Petro",
    "Anna",
    "Oleg",
    "Natalia",
  ];

  let sortedNames = bubbleSort(Array.from(namesArray));

  let targetName = "Olga";
  let index = binarySearch(sortedNames, targetName);

  if (index !== -1) {
    result = `Ім'я "${targetName}" знайдено на індексі ${index}.`;
  } else {
    result = `Ім'я "${targetName}" не знайдено в масиві.`;
  }

  document.write(
    `
    Масив імен:: ${JSON.stringify(namesArray)}<br>
    Відсортований масив: ${JSON.stringify(sortedNames)}<br>
    Результат: ${result}<br>
    `
  );
}
