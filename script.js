let display = document.getElementById("display");
let currentNumber = "";

function appendNumber(num) {
  currentNumber += num;
  display.value = currentNumber;
}

function appendOperator(operator) {
  currentNumber += " " + operator + " ";
  display.value = currentNumber;
}

function clearDisplay() {
  currentNumber = "";
  display.value = "";
}
function calculate() {
  try {
    let result = eval(currentNumber);
    display.value = result;
    currentNumber = "";
  } catch (error) {
    display.value = "Error";
  }
}
