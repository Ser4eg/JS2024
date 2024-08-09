/*Задача 9.
Створити функцію, яка виводить банер (у функцію передаються: 
зображення, заголовок та посилання, куди переходимо при кліку на зображення 
(тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>
*/

function createBanner(image, title, url) {
  
  let linkElement = document.createElement("a");
  linkElement.href = url
  linkElement.target = 'blank'
  linkElement.innerText = title
  linkElement.className = "banner";

  let imgElement = document.createElement("img");
  imgElement.src = image;
  imgElement.className = "image";

  linkElement.appendChild(imgElement);
  document.body.appendChild(linkElement);
}

const image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png";
const title = "JavaScript"
const url = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_operators"


createBanner(image, title, url);