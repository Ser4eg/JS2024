/*Задача 1. 
Дано клас PhoneNumber. 
Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)

*/
class PhoneNumber {
  constructor(number) {
      this.number = number;
  }

  [Symbol.toPrimitive](hint) {
      if (hint === 'string') {
          return this.getOperator();
      }
      return this.number;
  }

  getOperator() {
      // Словник префіксів та операторів
      const operators = {
          '050': 'МТС',
          '095': 'Vodafone',
          '066': 'Vodafone',
          '099': 'Vodafone',
          '067': 'Київстар',
          '096': 'Київстар',
          '097': 'Київстар',
          '098': 'Київстар',
          '063': 'lifecell',
          '073': 'lifecell',
          '093': 'lifecell',
      };

      // Отримуємо перші три цифри номера
      const prefix = this.number.toString().slice(0, 3);

      // Повертаємо назву оператора або 'Невідомий оператор'
      return operators[prefix] || 'Невідомий оператор';
  }
}

// Приклад використання
const phone1 = new PhoneNumber('0501234567');
const phone2 = new PhoneNumber('0967654321');
const phone3 = new PhoneNumber('0939876543');
const phone4 = new PhoneNumber('0800123456'); // Невідомий оператор

console.log(`${phone1}`); 
console.log(`${phone2}`); 
console.log(`${phone3}`);
console.log(`${phone4}`); 