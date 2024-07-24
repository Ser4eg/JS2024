// отримуєм дані
let productPrice = parseFloat(prompt("Вкажіть вартість за одиницю товару:", '10'));
let productCount = parseInt(prompt("Вкажіть кількість одиниць товару:", '2'));
const percentageValue = 5

// обчислення
let totalPrice = productPrice * productCount;
let VAT = totalPrice * percentageValue / 100

// вивід результату
document.write(`
  <h1>Результат обчислення:</h1>
  <table border="2px">
    <tr>
      <th>Вартість одиниці товару: ${productPrice}</th>
      <th>Кількість товару: ${productCount}</th>
    </tr>
    <tr>
      <th>Загальна вартість</th>
      <td>${totalPrice}</td>
    </tr>
    <tr>
      <th>ПДВ ${percentageValue}%</th>
      <td>${VAT}</td>
    </tr>
  </table>
`);
