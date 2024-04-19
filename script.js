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
  if (b === 0) {
    return "Nah, I'd win";
  }

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

const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");

function calculate(operatorValue) {
  if (firstNumber !== null && secondNumber !== null) {
    let result = operate(+firstNumber, +secondNumber, operator);

    // If result overflows the display
    if (result.toString().length > 13) {
      // Calculate how many digits are before the decimal point
      const factor = result.toString().split(".")[0].length;
      // Round the result so it doesn't overflow the display
      result = result.toFixed(12 - factor);
    }

    display.textContent = result;
    firstNumber = display.textContent;
    operator = operatorValue;
    isResult = true;
    return;
  }

  operator = operatorValue;
  display.textContent = "";
}

addButton.addEventListener("click", () => calculate("+"));
subtractButton.addEventListener("click", () => calculate("-"));
multiplyButton.addEventListener("click", () => calculate("*"));
divideButton.addEventListener("click", () => calculate("/"));

const equalButton = document.querySelector("#equal");
const decimalButton = document.querySelector("#decimal");

equalButton.addEventListener("click", () => {
  if (operator === null || secondNumber === null) {
    return;
  }

  let result = operate(+firstNumber, +secondNumber, operator);

  // If result overflows the display
  if (result.toString().length > 13) {
    // Calculate how many digits are before the decimal point
    const factor = result.toString().split(".")[0].length;
    // Round the result so it doesn't overflow the display
    result = result.toFixed(12 - factor);
  }

  display.textContent = result;
  isResult = true;
});

decimalButton.addEventListener("click", () => {
  if (display.textContent.includes(".")) {
    return;
  }

  display.textContent = display.textContent + ".";
});

const clearButton = document.querySelector("#clear");
const signButton = document.querySelector("#sign");
const percentButton = document.querySelector("#percent");

clearButton.addEventListener("click", () => {
  firstNumber = null;
  operator = null;
  secondNumber = null;

  display.textContent = 0;
});

signButton.addEventListener("click", () => {
  if (display.textContent === "0") {
    return;
  }

  display.textContent = +display.textContent * -1;

  if (operator === null) {
    firstNumber = display.textContent;
  } else {
    secondNumber = display.textContent;
  }
});

percentButton.addEventListener("click", () => {
  display.textContent = +display.textContent / 100;
});
