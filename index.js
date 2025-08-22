const display = document.getElementById("display");
let isError = false;

function append(value) {
  if (isError) {
    display.value = "";
    isError = false;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  isError = false;
}

function calculateResult() {
  try {
    const expression = display.value;

    if (!/^[0-9+\-*/%. ]+$/.test(expression)) {
      display.value = "Syntax Error";
      isError = true;
      return;
    }

    const result = Function(`"use strict"; return (${expression})`)();

    if (!isFinite(result)) {
      display.value = "Syntax Error";
      isError = true;
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Syntax Error";
    isError = true;
  }
}
