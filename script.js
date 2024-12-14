let display = document.getElementById("display");
let currentNumber = "";
let historyList = document.getElementById("history-list");

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

    // Add calculation and result to history
    let historyItem = document.createElement("li");
    historyItem.textContent = `${currentNumber} = ${result}`;
    historyList.appendChild(historyItem);

    // Clear the current input for the next calculation
    currentNumber = "";
  } catch (error) {
    display.value = "Error";
  }
}
