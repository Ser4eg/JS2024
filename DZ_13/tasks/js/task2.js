/*Задача 2. 
Дано масив імен спортсменів. 
Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).
*/

function getPossibleCompetitionResults(arr) {
  let result = [];

  function subset(currentAthletes, listAthletes) {
    if (listAthletes.length === 0) {
      result.push(currentAthletes);
      return;
    }

    for (let i = 0; i < listAthletes.length; i++) {
      const newList = [...currentAthletes, listAthletes[i]];
      const remaining = listAthletes.filter((_, index) => index !== i);
      subset(newList, remaining);
    }
  }

  subset([], arr);
  return result;
}

if (confirm("Почати тестування?")) {
  let athletes = ["Ivan", "Maria", "Olga"];
  let allResults = getPossibleCompetitionResults(athletes);

  document.write(
    `
    Cписок учасників: ${JSON.stringify(athletes)}<br>
    Можливі результати магань: ${JSON.stringify(allResults)}<br>   
    `
  );
}
