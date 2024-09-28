/*Задача 3. 
Об’єкт “Фірма” (використати члени-класи)
поля
назва фірми;
дата заснування (рік, місяць);
послуги (назва послуги, вартість, термін виконання);
адреси філіалів (країна, місто, вулиця, номер будинку);
методи
визначення кількості років існування фірми;
виведення всіх філіалів фірми у вказаному місті;
виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
*/

class Firm {
  #name;
  #foundationYear;
  #foundationMonth;
  #services = [];
  #branches = [];

  constructor(name, foundationYear, foundationMonth) {
    this.Name = name;
    this.FoundationYear = foundationYear;
    this.FoundationMonth = foundationMonth;
  }

  // Гетери та сетери
  get Name() {
    return this.#name;
  }

  set Name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Некоректна назва фірми!");
    }
    this.#name = value;
  }

  get FoundationYear() {
    return this.#foundationYear;
  }

  set FoundationYear(value) {
    if (value < 1800 || value > new Date().getFullYear()) {
      throw new Error("Некоректний рік заснування!");
    }
    this.#foundationYear = value;
  }

  get FoundationMonth() {
    return this.#foundationMonth;
  }

  set FoundationMonth(value) {
    if (value < 1 || value > 12) {
      throw new Error("Некоректний місяць заснування!");
    }
    this.#foundationMonth = value;
  }

  // Член-клас для опису послуг
  static Service = class {
    constructor(serviceName, cost, executionTime) {
      this.serviceName = serviceName;
      this.cost = cost;
      this.executionTime = executionTime;
    }
  };

  // Член-клас для опису філіалів
  static Branch = class {
    constructor(country, city, street, houseNumber) {
      this.country = country;
      this.city = city;
      this.street = street;
      this.houseNumber = houseNumber;
    }
  };

  // Метод для додавання послуги
  addService(serviceName, cost, executionTime) {
    const service = new Firm.Service(serviceName, cost, executionTime);
    this.#services.push(service);
  }

  // Метод для додавання філіалу
  addBranch(country, city, street, houseNumber) {
    const branch = new Firm.Branch(country, city, street, houseNumber);
    this.#branches.push(branch);
  }

  // Метод для визначення кількості років існування фірми
  getFirmAge() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    let years = currentYear - this.#foundationYear;
    if (currentMonth < this.#foundationMonth) {
      years--; 
    }
    return years;
  }

  // Метод для виведення всіх філіалів у вказаному місті
  getBranchesInCity(city) {
    return this.#branches.filter((branch) => branch.city === city);
  }

  // Метод для виведення послуг, що можуть бути виконані за певну суму та термін
  getAvailableServices(budget, maxExecutionTime) {
    return this.#services.filter(
      (service) =>
        service.cost <= budget && service.executionTime <= maxExecutionTime
    );
  }

  // Метод для виведення всіх послуг
  getAllServices() {
    return this.#services;
  }

  // Метод для виведення всіх філіалів
  getAllBranches() {
    return this.#branches;
  }
}

if (confirm("Почати тестування?")) {
  // Приклад використання
  try {
    const myFirm = new Firm("JS 2024", 2010, 5);

    // Додаємо послуги
    myFirm.addService("Розробка сайту", 5000, 30);
    myFirm.addService("SEO оптимізація", 3000, 20);
    myFirm.addService("Підтримка серверу", 1500, 10);

    // Додаємо філіали
    myFirm.addBranch("Україна", "Київ", "Хрещатик", 15);
    myFirm.addBranch("Україна", "Львів", "Соборна", 12);
    myFirm.addBranch("Україна", "Київ", "Прорізна", 23);

    // Отримуємо кількість років існування фірми
    console.log(`Фірма існує ${myFirm.getFirmAge()} років`);

    // Виведення філіалів у місті "Київ"
    const kyivBranches = myFirm.getBranchesInCity("Київ");
    console.log("Філіали у місті Київ:", kyivBranches);

    // Отримуємо доступні послуги за бюджет 4000 грн і максимальний термін виконання 15 днів
    const availableServices = myFirm.getAvailableServices(4000, 15);
    console.log("Доступні послуги:", availableServices);
  } catch (error) {
    console.error(error.message);
  }
}
