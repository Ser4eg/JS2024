/*Задача 3. 
Користувач задає рік народження. 
Визначити кількість років користувача.
*/

function calculateAge() {
  const birthYear = parseInt(document.getElementById('birthYear').value);
  const currentYear = new Date().getFullYear();

  if (isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
      document.getElementById('age').value = 'Некоректний рік!';
  } else {
      const age = currentYear - birthYear;
      document.getElementById('age').value = age;
  }
}
