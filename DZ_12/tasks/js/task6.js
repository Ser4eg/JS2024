/*Задача 6. 
Дано масив імен. 
Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
*/

// Сортування масиву методом бульбашки
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// Бінарний пошук для знаходження імені довжиною 5 символів
function binarySearchByLength(arr, length) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    const nameLength = arr[middle].length;

    if (nameLength === length) {
      return middle;
    } else if (nameLength < length) {
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
    "Sergey",
  ];

  let sortedNames = bubbleSort(Array.from(namesArray));

  let targetLength = 5;
  let index = binarySearchByLength(sortedNames, targetLength);

  if (index !== -1) {
    result = `Ім'я довжиною ${targetLength} символів знайдено на індексі ${index}: "${sortedNames[index]}".`;
  } else {
    result = `Ім'я довжиною ${targetLength} символів не знайдено в масиві.`;
  }

  document.write(
    `
    Масив імен:: ${JSON.stringify(namesArray)}<br>
    Відсортований масив: ${JSON.stringify(sortedNames)}<br>
    Результат: ${result}<br>
    `
  );
}
