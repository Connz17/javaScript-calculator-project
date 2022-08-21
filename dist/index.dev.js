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
console.log(totalButton);
var sqRoot = document.getElementById("root");
console.log(sqRoot);
var pcent = document.getElementById("percentage");
console.log(pcent);
var divide = document.getElementById("divide");
console.log(divide);
var times = document.getElementById("multiply");
console.log(times);
var minus = document.getElementById("takeAway");
console.log(minus);
var addition = document.getElementById("plus");
console.log(addition); // Create arrays from HTML collections

var numbersBtns = Array.from(numbersButton);
console.log(numbersBtns);
var operationsBtns = Array.from(operationsButton);
console.log(operationsBtns);
sign = operationsBtns.innerText;
console.log(sign); // Append number function
// Handle Operation function
// Clear Display function

var clear = function clear() {
  currentSc.innerText = "";
  previousSc.innerText = "";
}; // Update display function
// Delete item on display function


var back = function back() {
  currentSc.innerText = currentSc.innerText.toString().slice(0, -1);
}; // Final total function 


var answer = function answer() {
  var sumTotal;
  var enteredNum = parseFloat(previousSc.innerText);
  var newNum = parseFloat(currentSc.innerText);
  if (isNaN(enteredNum) || isNaN(newNum)) return;
  var sings = [sqRoot.innerText, pcent.innerText, divide.innerText, times.innerText, minus.innerText, addition.innerText];
  console.log(sings);

  for (var index = 0; index < sings.length; index++) {
    if (sings.includes("√")) {
      sumTotal = Math.sqrt(enteredNum);
      console.log("square");
    } else if (sings.includes("÷")) {
      sumTotal = enteredNum / newNum;
      console.log("divide");
    } else if (sings.includes("X")) {
      sumTotal = enteredNum * newNum;
      console.log("times");
    } else if (sings.includes("-")) {
      sumTotal = enteredNum - newNum;
      console.log("minus");
    } else if (sings.includes["+"]) {
      sumTotal = enteredNum + newNum;
      console.log("plus");
    } else if (sings.includes["%"]) {
      sumTotal = enteredNum % newNum;
      console.log("percent");
    } else {
      console.log("no computation happening");
    }
  }

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

totalButton.addEventListener("click", function (event) {
  event.preventDefault();
  answer();
  console.log(totalButton);
});