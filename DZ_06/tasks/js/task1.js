/*Задача 1. 
Вивести на екран
    A B C D E
    B C D E F
    C D E F G
    D E F G H
    E F G H I
*/

const firstLetterCode = "A".charCodeAt(0);
let result = "";

for (let i = 0; i < 5; i++) {
  result += `${(firstLetterCode + i).fromCharCode(0)}`;

  for (let j = 0; j < 5; j++) {
    result += `${(firstLetterCode + j).fromCharCode(0)}`;
  }
}

document.write(`${result}`);
