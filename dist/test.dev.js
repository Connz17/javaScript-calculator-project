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
var add = document.getElementById("plus");
console.log(add); // add elements to sings

var squareRoot = sqRoot.toString() + sqRoot.innerText;
console.log(squareRoot);
var percentage = pcent.toString() + pcent.innerText;
console.log(percentage);
var division = divide.toString() + divide.innerText;
console.log(division);
var multiply = times.toString() + times.innerText;
console.log(multiply);
var subtract = minus.toString() + minus.innerText;
console.log(subtract);
var addition = add.toString() + add.innerText;
console.log(addition); // Create arrays from HTML collections

var numbersBtns = Array.from(numbersButton);
console.log(numbersBtns);
var operationsBtns = Array.from(operationsButton);
console.log(operationsBtns);
var operations = [squareRoot, percentage, division, multiply, subtract, addition];
console.log(operations);
var operations1 = [squareRoot.innerText, percentage.innerText, division.innerText, multiply.innerText, subtract.innerText, addition.innerText];
console.log(operations1);
var operations2 = [squareRoot.toString(), percentage.toString(), division.toString(), multiply.toString(), subtract.toString(), addition.toString()];
console.log(operations2);
var signs = [sqRoot.innerText, pcent.innerText, divide.innerText, times.innerText, minus.innerText, add.innerText];
console.log(signs.toString());
var test = [add.toString()];
console.log(test); // Append number function
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

  switch (operation.innerText) {
    case "+":
      sumTotal = enteredNum + newNum;
      console.log("plus");
      break;

    default:
      console.log("no computation happening");
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

operations1.forEach(function (operation) {
  operation.addEventListener("click", function () {
    console.log(operation); // signs.forEach((sign) => {
    //     // match = operation.innerText + sign;
    //     // console.log(match);
    //     // switch case to match the sign to operation and make new variable
    // });

    if (currentSc.innerText === "") return;

    if (previousSc.innerText !== "") {
      answer();
    } // Shift number to top section and add operation sign


    previousSc.innerText = currentSc.innerText + " " + operation.innerText; // console.log(previousSc.innerText);

    currentSc.innerText = "";
  }); // add All Equals button click functionality

  totalButton.addEventListener("click", function () {
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    console.log(previousSc.innerText.toString());

    switch (previousSc.innerText.toString()) {
      case "+":
        sumTotal = enteredNum + newNum;
        console.log("plus");
        break;

      default:
        console.log("no computation happening");
    }

    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
    console.log(totalButton);
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