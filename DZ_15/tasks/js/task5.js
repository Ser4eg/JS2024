/*Задача 5. 
Розробити клас Baner
Поля
Масив об’єктів ( графічних зображень та посилань на сайти)
методи
Метод випадкового вибору об’єкта (графічного зображення та посилання)
Метод виведення випадкового банера
*/

if (confirm("Почати тестування?")) {
  class Baner {
    constructor(banners) {
      this.banners = banners;
    }

    getRandomBaner() {
      const randomIndex = Math.floor(Math.random() * this.banners.length);
      return this.banners[randomIndex];
    }

    displayRandomBaner() {
      const selectedBaner = this.getRandomBaner();

      const banerHtml = `
        <div style="text-align: center; margin-top: 20px;">
          <a href="${selectedBaner.link}" target="_blank">
            <img src="${selectedBaner.image}" alt="Банер" style="max-width: 100%; height: auto;">
          </a>
        </div>
      `;
      document.querySelector(".result").innerHTML += banerHtml;
    }
  }

  const bannersList = [
    {
      image: "https://via.placeholder.com/300x100?text=Baner+1",
      link: "https://site1.com",
    },
    {
      image: "https://via.placeholder.com/300x100?text=Baner+2",
      link: "https://site2.com",
    },
    {
      image: "https://via.placeholder.com/300x100?text=Baner+3",
      link: "https://site3.com",
    },
    {
      image: "https://via.placeholder.com/300x100?text=Baner+4",
      link: "https://site4.com",
    },
  ];

  const baner = new Baner(bannersList);
  baner.displayRandomBaner();
}
