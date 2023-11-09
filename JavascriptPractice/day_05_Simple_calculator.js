// function to add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// function to subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}

// function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// function to divide two numbers
function divide(num1, num2) {
  return num1 / num2;
}

// get input from user
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

// perform operations
console.log("Addition:", add(num1, num2));
console.log("Subtraction:", subtract(num1, num2));
console.log("Multiplication:", multiply(num1, num2));
console.log("Division:", divide(num1, num2));
