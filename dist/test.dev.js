"use strict";

// ALL HTML elements is variables:
var numbersButton = document.getElementsByClassName("calculator__buttons--number");
console.log(numbersButton);
var operationsButton = document.getElementsByClassName("calculator__buttons--operation");
console.log(operationsButton);
var currentSc = document.getElementById("screenCurr");
console.log(currentSc);
var previousSc = document.getElementById("screenPrev");
console.log(previousSc);
var clearButton = document.getElementById("AC");
console.log(clearButton);
var cancelButton = document.getElementById("delete");
console.log(cancelButton);
var totalButton = document.getElementById("equals");
console.log(totalButton); // Create arrays from HTML collections

var numbersBtns = Array.from(numbersButton);
console.log(numbersBtns);
var operationsBtns = Array.from(operationsButton);
console.log(operationsBtns); // Append number function

handleNumber = function handleNumber(number) {
  if (number.innerText === "." && currentSc.innerText.includes(".")) return;
  number.toString = number.innerText;
  currentSc.innerText = currentSc.innerText + number.toString;
}; // Handle Operation function


handleOperation = function handleOperation(operation) {
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  }

  var calculation = currentSc.innerText + " " + operation.innerText;
  previousSc.innerText = calculation;
  currentSc.innerText = "";
}; // Clear Display function


clear = function clear() {
  currentSc.innerText = "";
  previousSc.innerText = "";
}; // Update display function


updateDisplay = function updateDisplay() {
  currentSc.innerText = currentSc;
  previousSc.innerText = previousSc;
}; // Delete item on display function


back = function back() {
  currentSc.innerText = currentSc.innerText.toString().slice(0, -1);
}; // Final total function 


answer = function answer() {
  var total;
  var enteredNum = previousSc.innerText;
  var newNum = currentSc.innerText;
  if (isNaN(enteredNum) || isNaN(newNum)) return;

  switch (operation) {
    case operationsBtns[4]:
      total = parseFloat(enteredNum) - parseFloat(newNum);
      break;

    case operationsBtns[5]:
      total = parseFloat(enteredNum) + parseFloat(newNum);
      break;

    case operationsBtns[3]:
      total = parseFloat(enteredNum) * parseFloat(newNum);
      break;

    case operationsBtns[2]:
      total = parseFloat(enteredNum) / parseFloat(newNum);
      break;

    case operationsBtns[1]:
      total = parseFloat(enteredNum) % parseFloat(newNum);
      break;

    case operationsBtns[0]:
      total = Math.sqrt(parseFloat(enteredNum));

    default:
      break;
  }

  currentSc.innerText = total;
  previousSc.innerText = "";
}; // Add Number button click functionality 


numbersBtns.forEach(function (number) {
  number.addEventListener("click", function () {
    handleNumber(number.innerText);
    updateDisplay();
  });
}); // Add Operation button click functionality 

operationsBtns.forEach(function (operation) {
  operation.addEventListener("click", function () {
    handleOperation(operation.innerText);
    updateDisplay();
  });
}); // add All Clear button click functionality

clearButton.addEventListener("click", function () {
  clear();
  updateDisplay();
}); // add All Delete button click functionality

cancelButton.addEventListener("click", function () {
  back();
  updateDisplay();
}); // add All Equals button click functionality

totalButton.addEventListener("click", function () {
  answer();
  updateDisplay();
});