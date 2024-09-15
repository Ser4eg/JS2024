/*Задача 6. 
З використанням замикань розробити ітератор, тобто функцію, 
що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. 
З використанням нього розробити гру «Прекладач». 
Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. 
Підрахувати кількість вгаданих букв.
*/

if (confirm("Почати тестування?")) {
  let word = "function";

  function wordIndex(word) {
    let letterIndex = 0;
    return function () {
      if (letterIndex === word.length) {
        return -1;
      } else {
        letterIndex++;
        return letterIndex;
      }
    };
  }

  function gameTranslator(word) {
    alert("За описом слова вагадати його(англійска мова)");
    alert(
      "Це блок коду (підпрограма), який може бути визначений для виконання конкретної задачі."
    );
    let guessingLetters = 0;
    let indexLetter = wordIndex(word);
    let letterIndex = indexLetter();

    do {
      let guessingLetter = prompt(
        `Ввдіть ${letterIndex} літеру:`
      ).toLowerCase();
      if (guessingLetter === word[letterIndex - 1]) guessingLetters++;
      letterIndex = indexLetter();
    } while (letterIndex !== -1);
    alert(`Слово було: ${word} вгаданних літер: ${guessingLetters}`);
  }
  gameTranslator(word);
}
