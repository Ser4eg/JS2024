/*Задача 10.
Вивести на екран N абзаців (N вводиться користувачем) за зразком:
*/

const userСhapterCount = parseInt(prompt("Вкажіть кількість розділів:", "1"));

let result = "";

for (let chapter = 1; chapter <= userСhapterCount; chapter++) {
  result += `<h1>Заголовок ${chapter}</h1>`;

  for (let paragraph = 1; paragraph <= chapter; paragraph++) {
    result += `<p>Розділ ${chapter}, параграф ${paragraph}</p>`;
  }

  result += "<hr>";
}

document.write(`${result}`);
