/*Задача 3. 
Написати програму виведення на екран кожного символу латинського алфавіту та поруч з кожним з них символу, що передує йому та що слідує за ним.
*/
const firstLetterCode = "A".charCodeAt(0);
const lastLetterCode = "Z".charCodeAt(0);

for (let i = firstLetterCode; i <= lastLetterCode; i++) {
  let currentChar = String.fromCharCode(i);
  let prevChar =
    i > firstLetterCode
      ? String.fromCharCode(i - 1)
      : "це перша літера, немає попереднього символу";
  let nextChar =
    i < lastLetterCode
      ? String.fromCharCode(i + 1)
      : "це остання літера, немає наступного символу";

  document.write(
    `${currentChar}: попередній символ - ${prevChar}, наступний символ - ${nextChar}<br>`
  );
}
