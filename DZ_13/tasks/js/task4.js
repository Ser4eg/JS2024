/*Задача 4. 
Дано масив хлопців і дівчат 
вивести всі можливі комбінації для танців з хлопців і дівчат.
*/

function getDancePairs(
  boys,
  girls,
  currentBoyIndex = 0,
  usedGirls = [],
  currentPairs = [],
  counter = { count: 0 }
) {
  if (currentBoyIndex === boys.length) {
    counter.count++;
    console.log(`Варіант ${counter.count}:`, currentPairs);
    return;
  }

  for (let i = 0; i < girls.length; i++) {
    if (!usedGirls[i]) {
      usedGirls[i] = true;
      let newPairs = [...currentPairs, [boys[currentBoyIndex], girls[i]]];
      getDancePairs(
        boys,
        girls,
        currentBoyIndex + 1,
        usedGirls,
        newPairs,
        counter
      );
      usedGirls[i] = false;
    }
  }
}

if (confirm("Почати тестування?")) {
  let boys = ["Dima", "Ivan", "Alex"];
  let girls = ["Maria", "Olga", "Tanya"];

  let counter = { count: 0 };
  console.log("Можливі пари для танців:");
  getDancePairs(boys, girls, 0, [], [], counter);
}
