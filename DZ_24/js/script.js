class WeatherApp {
  constructor() {
    this.api = {
      url: "https://api.openweathermap.org/data/2.5/weather",
      key: "ec655743d801e51f9261162866bfff77",
      units: "metric",
      lang: "ua",
    };

    this.cityCentres = {
      Вінниця: 689558,
      Дніпро: 709930,
      Донецьк: 709717,
      Житомир: 686967,
      Запоріжжя: 687700,
      "Івано-Франківськ": 707471,
      Київ: 703448,
      Кропивницький: 705812,
      Луганськ: 702658,
      Луцьк: 702569,
      Львів: 702550,
      Миколаїв: 700568,
      Одеса: 698740,
      Полтава: 696643,
      Рівне: 695594,
      Суми: 692194,
      Тернопіль: 691650,
      Ужгород: 690548,
      Харків: 706483,
      Херсон: 706448,
      Хмельницький: 706369,
      Черкаси: 710791,
      Чернівці: 710719,
      Чернігів: 710735,
    };

    this.windDetails = [
      ["Північний", "Пн", 0, 44],
      ["Північно-Східний", "Пн-Сх", 45, 89],
      ["Східний", "Сх", 90, 134],
      ["Південно-Східний", "Пд-Сх", 135, 179],
      ["Південний", "Пд", 180, 224],
      ["Південно-Західний", "Пд-Зх", 225, 269],
      ["Західний", "Зх", 270, 314],
      ["Північно-Західний", "Пн-Зх", 315, 359],
    ];

    this.init();
  }

  init() {
    this.populateCitySelect();
    document
      .getElementById("get-weather-btn")
      .addEventListener("click", () => this.getWeather());
  }

  populateCitySelect() {
    const select = document.getElementById("city-select");
    let options = "";
    for (let city in this.cityCentres) {
      const isSelected = this.cityCentres[city] === 703448 ? "selected" : "";
      options += `<option value="${this.cityCentres[city]}" ${isSelected}>${city}</option>`;
    }
    select.innerHTML = options;
  }

  async getWeather() {
    const cityID = document.getElementById("city-select").value;
    const url = `${this.api.url}?id=${cityID}&units=${this.api.units}&lang=${this.api.lang}&appid=${this.api.key}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Не вдалося отримати дані");
      const data = await response.json();
      this.showWeatherNow(data);
    } catch (error) {
      document.getElementById(
        "weather-info"
      ).innerHTML = `<p class="weather-data">${error.message}</p>`;
    }
  }

  showWeatherNow(data) {
    console.log(data);
    const weatherInfoDiv = document.getElementById("weather-info");

    // Дата
    const dateObj = new Date(data.dt * 1000);
    const options = { month: "long", day: "numeric", year: "numeric" };

    // Отримуємо день тижня як рядок, а потім форматуємо дату вручну
    const weekday = dateObj.toLocaleDateString("uk-UA", { weekday: "long" });
    const formattedDate = `${
      weekday.charAt(0).toUpperCase() + weekday.slice(1)
    }, ${dateObj.toLocaleDateString("uk-UA", options)}`;

    // Час сходу і заходу сонця
    const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000)
      .toISOString()
      .substr(11, 5);
    const sunset = new Date((data.sys.sunset + data.timezone) * 1000)
      .toISOString()
      .substr(11, 5);

    // Напрямок вітру
    const windDeg = data.wind.deg;
    const windDirection = this.getWindDirection(windDeg);

    // Виведення погоди
    weatherInfoDiv.innerHTML = `
      <p class="weather-data"><strong>Місто:</strong> ${data.name}</p>
      <p class="weather-data"><strong>Дата:</strong> ${formattedDate}</p>
      <p class="weather-data"><strong>Температура:</strong> ${Math.round(
        data.main.temp
      )}&deg;C</p>
      <p class="weather-data"><strong>Відчувається як:</strong> ${Math.round(
        data.main.feels_like
      )}&deg;C</p>
      <div class="weather-icon"><img src="https://openweathermap.org/img/wn/${
        data.weather[0]["icon"]
      }@4x.png"></div>
      
      <p class="weather-data"><strong>Опис:</strong> ${
        data.weather[0].description
      }</p>
      <p class="weather-data"><strong>Швидкість вітру:</strong> ${Math.round(
        data.wind.speed
      )} м/с</p>
      <p class="weather-data"><strong>Напрямок вітру:</strong> ${windDirection}</p>
      <p class="weather-data"><strong>Вологість:</strong> ${
        data.main.humidity
      }%</p>
      <p class="weather-data"><strong>Тиск:</strong> ${Math.round(
        data.main.pressure / 1.333
      )} мм рт. ст.</p>
      <p class="weather-data"><strong>Схід сонця:</strong> ${sunrise}</p>
      <p class="weather-data"><strong>Захід сонця:</strong> ${sunset}</p>
    `;
  }

  getWindDirection(deg) {
    for (let [name, , min, max] of this.windDetails) {
      if (deg >= min && deg <= max) return name;
    }
    return "Невідомий напрямок";
  }
}

// Ініціалізація
document.addEventListener("DOMContentLoaded", () => {
  new WeatherApp();
});
