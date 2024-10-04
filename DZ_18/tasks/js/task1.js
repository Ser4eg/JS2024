/*Задача 1. 
Розробити калькулятор
*/

function calculate(operation) {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );
  let result = 0;

  switch (operation) {
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      result = secondNumber !== 0 ? firstNumber / secondNumber : "Error";
      break;
    default:
      result = "Error";
  }

  if (result === "Error") {
    document.getElementById("result").value = result;
  } else {
    document.getElementById("result").value = result.toFixed(2);
  }
}
