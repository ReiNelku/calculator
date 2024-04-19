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

let firstNumber = null;
let operator = null;
let secondNumber = null;

function operate(firstOperand, secondOperand, operatorValue) {
  switch (operatorValue) {
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
let isResult = false;

document.querySelectorAll(".operand").forEach((operand) =>
  operand.addEventListener("click", (event) => {
    if (display.textContent.length === 13) {
      return;
    } else if (display.textContent === "0" || isResult === true) {
      display.textContent = event.target.textContent;
      isResult = false;
    } else {
      display.textContent += event.target.textContent;
    }

    if (operator === null) {
      firstNumber = display.textContent;
    } else {
      secondNumber = display.textContent;
    }
  })
);
