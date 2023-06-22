let displayValue = "";
let storedValue = "";
let selectedOperator = "";

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function setOperator(operator) {
  selectedOperator = operator;
  storedValue = displayValue;
  displayValue = "";
}

function calculate() {
  let result;
  const num1 = parseFloat(storedValue);
  const num2 = parseFloat(displayValue);

  switch (selectedOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }

  displayValue = result.toString();
  selectedOperator = "";
  storedValue = "";
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  storedValue = "";
  selectedOperator = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("result").value = displayValue;
}
