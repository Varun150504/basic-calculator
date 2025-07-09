// Appends value to both the display and the expression field
function appendToDisplay(value) {
  const display = document.getElementById('display');
  const expression = document.getElementById('expressionDisplay');
  display.value += value;
  expression.textContent = display.value;
}

// Clears the calculator input
function clearDisplay() {
  document.getElementById('display').value = '';
  document.getElementById('expressionDisplay').textContent = '';
}

// Removes the last character from the display
function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
  document.getElementById('expressionDisplay').textContent = display.value;
}

// Calculates the result and displays it
function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value); // Note: Insecure in production
  } catch (error) {
    display.value = 'Error';
  }
}