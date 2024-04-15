function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);
    case "-":
      return subtract(firstOperand, secondOperand);
    case "*":
      return multiply(firstOperand, secondOperand);
    case "/":
      return divide(firstOperand, secondOperand);
  }
}

let display = document.querySelector(".display");

document.querySelectorAll(".operand").forEach((operand) =>
  operand.addEventListener("click", (event) => {
    if (display.textContent.length === 13) {
      return;
    } else if (display.textContent === "0") {
      display.textContent = event.target.textContent;
    } else {
      display.textContent += event.target.textContent;
    }
  })
);
