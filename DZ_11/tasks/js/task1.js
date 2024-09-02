/*Задача 1. 
Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
1)номери рядків від 0 до половини, стовпці від 0 до половини
2)номери рядків від 0 до половини, стовпці від половини до кінця
3)номери рядків (від половини до кінця, стовпці від 0 до половини
4)номери рядків від половини до кінця , стовпці від половини до кінця
5) Суму парних рядків
6) Суму непарних стовпців
7) У парних рядках – непарні стовпці, у непарних – парні.
*/

function getRandomNumber(min = 1, max = 10) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getNewArray(length = 10) {
  return Array.from({ length }, () => getRandomNumber());
}

function getTwoDimensionalArray(rows = 4, cols = 4) {
  return Array.from({ length: rows }, () => getNewArray(cols));
}


//1)Знайти суми елементів у вказаній області номери рядків від 0 до половини, стовпці від 0 до половини
function getSumOfLeftTopArea(array) {
  const halfRows = Math.floor(array.length / 2);
  const halfCols = Math.floor(array[0].length / 2);
  let sum = 0;
  for (let i = 0; i < halfRows; i++) {
    for (let j = 0; j < halfCols; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}

// 2)Знайти суми елементів у вказаній області номери рядків від 0 до половини, стовпці від половини до кінця
function getSumOfRightTopArea(array) {
  const halfRows = Math.floor(array.length / 2);
  const halfCols = Math.floor(array[0].length / 2);
  let sum = 0;
  for (let i = 0; i < halfRows; i++) {
    for (let j = halfCols; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}

// 3)Знайти суми елементів у вказаній області номери рядків (від половини до кінця, стовпці від 0 до половини
function getSumOfLeftBottomArea(array) {
  const halfRows = Math.floor(array.length / 2);
  const halfCols = Math.floor(array[0].length / 2);
  let sum = 0;
  for (let i = halfRows; i < array.length; i++) {
    for (let j = 0; j < halfCols; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}

// 4)Знайти суми елементів у вказаній області номери рядків від половини до кінця , стовпці від половини до кінця
function getSumOfRightBottomArea(array) {
  const halfRows = Math.floor(array.length / 2);
  const halfCols = Math.floor(array[0].length / 2);
  let sum = 0;
  for (let i = halfRows; i < array.length; i++) {
    for (let j = halfCols; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}

// 5) Суму парних рядків
function getSumOfEvenRows(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 2) {
    sum += array[i].reduce((acc, val) => acc + val, 0);
  }
  return sum;
}

// 6) Суму непарних стовпців
function getSumOfOddColumns(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array[i].length; j += 2) {
      sum += array[i][j];
    }
  }
  return sum;
}

// 7) У парних рядках – непарні стовпці, у непарних – парні.
function getSumOfEvenRowsOddColsOddRowsEvenCols(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i % 2 === 0 ? 1 : 0; j < array[i].length; j += 2) {
      sum += array[i][j];
    }
  }
  return sum;
}

if (confirm("Почати тестування?")) {
  const arrayRows = parseInt(
    prompt("Вкажіть кількість елементів двовимірного масива", "4")
  );
  const arrayCols = parseInt(
    prompt(
      "Вкажіть кількість елементів для кожного із елемента двовимірного масива",
      "4"
    )
  );

  const twoDimensionalArray = getTwoDimensionalArray(arrayRows, arrayCols);

  document.write(
    `
    Створено масив: ${JSON.stringify(twoDimensionalArray)}<br>
    1) Знайти суми елементів у вказаній області номери рядків від 0 до половини, стовпці від 0 до половини: ${getSumOfLeftTopArea(
      twoDimensionalArray
    )}<br>
    2) Знайти суми елементів у вказаній області номери рядків від 0 до половини, стовпці від половини до кінця: ${getSumOfRightTopArea(
      twoDimensionalArray
    )}<br>
    3) Знайти суми елементів у вказаній області номери рядків (від половини до кінця, стовпці від 0 до половини: ${getSumOfLeftBottomArea(
      twoDimensionalArray
    )}<br>
    4) Знайти суми елементів у вказаній області номери рядків від половини до кінця , стовпці від половини до кінця: ${getSumOfRightBottomArea(
      twoDimensionalArray
    )}<br>
    5) Суму парних рядків: ${getSumOfEvenRows(twoDimensionalArray)}<br>
    6) Суму непарних стовпців: ${getSumOfOddColumns(twoDimensionalArray)}<br>
    7) У парних рядках – непарні стовпці, у непарних – парні.: ${getSumOfEvenRowsOddColsOddRowsEvenCols(
      twoDimensionalArray
    )}<br>
    `
  );
}
