class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.previousOperandTextElement = previousOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operator = undefined;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand += number;
  }

  chooseOperator(operator) {
    if (isNaN(this.currentOperand)) return "";
    if (this.previousOperand !== "") this.compute();
    this.operator = operator;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.previousOperand !== "")
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operator}`;
    else this.previousOperandTextElement.innerText = "";
  }

  compute() {
    if (isNaN(this.previousOperand) || isNaN(this.currentOperand)) return "";
    let result;
    let a, b;
    switch (this.operator) {
      case "+":
        a = parseFloat(this.currentOperand);
        b = parseFloat(this.previousOperand);
        result = a + b;
        break;
      case "-":
        a = parseFloat(this.previousOperand);
        b = parseFloat(this.currentOperand);
        result = a - b;
        break;
      case "*":
        a = parseFloat(this.previousOperand);
        b = parseFloat(this.currentOperand);
        result = a * b;
        break;
      case "÷":
        a = parseFloat(this.previousOperand);
        b = parseFloat(this.currentOperand);
        result = a / b;
        break;
      default:
        return "";
    }
    this.currentOperand = result;
    this.operator = undefined;
    this.previousOperand = "";
  }
}

const numberbtns = document.querySelectorAll("[data-number]");
const operator = document.querySelectorAll("[data-operator]");
const clearAll = document.querySelector("[data-all-clear]");
const deleteOperand = document.querySelector("[data-delete]");
const equalsOperand = document.querySelector("[data-equls]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendNumber(btn.innerText);
    calculator.updateDisplay();
  });
});

operator.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.chooseOperator(btn.innerText);
    calculator.updateDisplay();
  });
});
clearAll.addEventListener("click", () => calculator.clear());
deleteOperand.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

equalsOperand.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
