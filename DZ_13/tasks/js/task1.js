/*Задача 1. 
 енерація всіх підмножин: 
Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. 
Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
*/

function getSubsets(arr) {
  let result = [];

  function subset(currentSubset, index) {
    if (index === arr.length) {
      result.push([...currentSubset]);
      return;
    }

    currentSubset.push(arr[index]);
    subset(currentSubset, index + 1);

    currentSubset.pop();
    subset(currentSubset, index + 1);
  }

  subset([], 0);
  return result;
}

if (confirm("Почати тестування?")) {
  let array = [1, 2, 3];
  let subsets = getSubsets(array);

  document.write(
    `
    Дано масив: ${JSON.stringify(array)}<br>
    Можливі підмножини заданого масиву: ${JSON.stringify(subsets)}<br>      
    `
  );
}
