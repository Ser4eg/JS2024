/*Задача 8.
Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
*/

function showRandomImage(image1, image2, image3, image4) {
  let randomNumber = Math.floor(Math.random() * 4) + 1;
  let randomImage;

  if (randomNumber === 1) {
    randomImage = image1;
  } else if (randomNumber === 2) {
    randomImage = image2;
  } else if (randomNumber === 3) {
    randomImage = image3;
  } else {
    randomImage = image4;
  }

  let imgElement = document.createElement("img");
  imgElement.src = randomImage;
  imgElement.className = "image";
  document.body.appendChild(imgElement);
}

const image1 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png";
const image2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU";
const image3 =
  "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg";
const image4 =
  "https://yt3.googleusercontent.com/_wQzr_d3FtLx91_37CR2x_U1W0UaOYzLySQSk45ZZBDhPE9jSo-iTuHoE66-JlOgk6MQEsjJLQ=s900-c-k-c0x00ffffff-no-rj";

showRandomImage(image1, image2, image3, image4);
