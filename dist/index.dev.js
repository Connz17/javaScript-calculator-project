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
// Handle Operation function
// Clear Display function

clear = function clear() {
  currentSc.innerText = "";
  previousSc.innerText = "";
}; // Update display function
// Delete item on display function


back = function back() {
  currentSc.innerText = currentSc.innerText.toString().slice(0, -1);
}; // Final total function 


answer = function answer() {
  var sumTotal;
  var enteredNum = parseFloat(previousSc.innerText);
  var newNum = parseFloat(currentSc.innerText);
  if (isNaN(enteredNum) || isNaN(newNum)) return;
  operationsBtns.forEach(function (sign) {
    switch (sign.innerText) {
      case "-":
        sumTotal = enteredNum - newNum;
        console.log("minus");
        break;

      case "+":
        sumTotal = enteredNum + newNum;
        console.log("plus");
        break;

      case "X":
        sumTotal = enteredNum * newNum;
        console.log("times");
        break;

      case "÷":
        sumTotal = enteredNum / newNum;
        console.log("divide");
        break;

      case "%":
        sumTotal = enteredNum % newNum;
        console.log("percent");
        break;

      case "√":
        sumTotal = Math.sqrt(enteredNum);
        console.log("square");
        break;

      default:
        console.log("no computation happening");
        return;
    }
  });
  currentSc.innerText = sumTotal;
  previousSc.innerText = "";
}; // Add Number button click functionality 


numbersBtns.forEach(function (number) {
  number.addEventListener("click", function () {
    console.log(number);
    number.toString = number.innerText;
    var bigNum = number.toString;
    if (number.innerText === "." && currentSc.innerText.includes(".")) return;
    currentSc.innerText = currentSc.innerText + bigNum;
  });
}); // Add Operation button click functionality 

operationsBtns.forEach(function (operation) {
  operation.addEventListener("click", function () {
    console.log(operation);
    if (currentSc.innerText === "") return;

    if (previousSc.innerText !== "") {
      answer();
    } // Shift number to top section and add operation sign


    var calculation = currentSc.innerText + " " + operation.innerText;
    previousSc.innerText = calculation;
    currentSc.innerText = "";
  });
}); // add All Clear button click functionality

clearButton.addEventListener("click", clear);
console.log(clearButton); // Clear the display
// currentSc.innerHTML = ""
// previousSc.innerHTML = ""
// add All Delete button click functionality

cancelButton.addEventListener("click", back);
console.log(cancelButton); // Delete last number
// currentSc.innerText = currentSc.innerText.toString().slice(0, -1)
// add All Equals button click functionality

totalButton.addEventListener("click", answer);
console.log(totalButton);