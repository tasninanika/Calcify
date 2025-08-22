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
}

function calculateResult() {
  try {
    const expression = display.value;

    if (!/^[0-9+\-*/%. ]+$/.test(expression)) {
      display.value = "Math Error";
      return;
    }

    const result = Function(`"use strict"; return (${expression})`)();

    if (!isFinite(result)) {
      display.value = "Math Error";
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Math Error";
  }
}
