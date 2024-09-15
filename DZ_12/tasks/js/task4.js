/*Задача 4. 
Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком .
Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран (стрілки не потрібні).
*/

function getRandomNumber(min = 1, max = 15) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getNewArray(length = 5) {
  return Array.from({ length }, () => getRandomNumber());
}

function bubbleSortWithStats(arr) {
  let arrLength = arr.length;
  let comparisons = 0;
  let swaps = 0;
  let swapped;
  let state = [];

  do {
    swapped = false;

    for (let i = 0; i < arrLength - 1; i++) {
      comparisons++;
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swaps++;
        swapped = true;
        console.log(
          `Стан масиву на кроці ${swaps} бульбашкою: [${arr.join(", ")}]`
        );
        state.push(
          `Стан масиву на кроці ${swaps} бульбашкою: [${arr.join(", ")}]`
        );
      }
    }

    arrLength--;
  } while (swapped);

  return { sortedArray: arr, comparisons, swaps, state };
}

function mixingSortWithStats(arr) {
  let comparisons = 0;
  let swaps = 0;
  let start = 0;
  let end = arr.length - 1;
  let swapped = true;
  let state = [];

  while (swapped) {
    swapped = false;

    for (let i = start; i < end; i++) {
      comparisons++;
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swaps++;
        swapped = true;
        console.log(
          `Стан масиву на кроці ${swaps} змішуванням: [${arr.join(", ")}]`
        );
        state.push(
          `Стан масиву на кроці ${swaps} змішуванням: [${arr.join(", ")}]`
        );
      }
    }

    if (!swapped) break;

    end--;
    swapped = false;

    for (let i = end; i > start; i--) {
      comparisons++;
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        swaps++;
        swapped = true;
        console.log(
          `Стан масиву на кроці ${swaps} змішуванням: [${arr.join(", ")}]`
        );
        state.push(
          `Стан масиву на кроці ${swaps} змішуванням: [${arr.join(", ")}]`
        );
      }
    }

    start++;
  }

  return { sortedArray: arr, comparisons, swaps, state };
}

function insertionSortWithStats(arr) {
  let comparisons = 0;
  let swaps = 0;
  let state = [];

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

    console.log(`Стан масиву на кроці ${i} включеннями: [${arr.join(", ")}]`);
    state.push(`Стан масиву на кроці ${i} включеннями: [${arr.join(", ")}]`);
  }

  return { sortedArray: arr, comparisons, swaps, state };
}

if (confirm("Почати тестування?")) {
  const length = parseInt(prompt("Вкажіть кількість елементів масива", "5"));
  const randomArray = getNewArray(length);
  const initialArray = Array.from(randomArray);
  const bubbleSort = bubbleSortWithStats(Array.from(randomArray));
  const mixingSort = mixingSortWithStats(Array.from(randomArray));
  const insertionSort = insertionSortWithStats(Array.from(randomArray));

  document.write(
    `
    Створено масив: ${JSON.stringify(initialArray)}<hr>
    <h1>Cортування бульбашкою</h1><br>
    Відсортований масив: ${JSON.stringify(bubbleSort.sortedArray)}<br>
    Кількість порівнянь: ${bubbleSort.comparisons}<br>
    Кількість обмінів: ${bubbleSort.swaps}<br>    
    ${bubbleSort.state.join("<br> ")}<br>  
    <hr>  
    <h1>Cортування змішуванням</h1><br>
    Відсортований масив: ${JSON.stringify(mixingSort.sortedArray)}<br>
    Кількість порівнянь: ${mixingSort.comparisons}<br>
    Кількість обмінів: ${mixingSort.swaps}<br>    
    ${mixingSort.state.join("<br> ")}<br>  
    <hr>  
    <h1>Cортування включеннями</h1><br>
    Відсортований масив: ${JSON.stringify(insertionSort.sortedArray)}<br>
    Кількість порівнянь: ${insertionSort.comparisons}<br>
    Кількість обмінів: ${insertionSort.swaps}<br>    
    ${insertionSort.state.join("<br> ")}<br>  
    <hr>  
    `
  );
}
