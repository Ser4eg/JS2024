/*Задача 4. 
Зобразити рівнобедрений трикутник із символів ^. 
Висоту задає користувач.
*/

let rectangleHeight = parseInt(prompt("Введіть висоту трикутника: "));
let result = "";

for (let i = 0; i < rectangleHeight; i++) {
  let spaces = " ".repeat(rectangleHeight - i - 1);
  let symbols = "^".repeat(2 * i + 1);
  result += `${spaces + symbols + spaces} <br>`;
}

document.write(`<p style="text-align: center;">${result}</p>`);
