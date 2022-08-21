"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

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
console.log(signs);
var test = [add];
console.log(test); // Append number function
// Handle Operation function
// Clear Display function

var clear = function clear() {
  currentSc.innerText = "";
  previousSc.innerText = "";
  previousSc = (_readOnlyError("previousSc"), "");
  currentSc = (_readOnlyError("currentSc"), "");
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
  currentSc.innerText = "";
}); // Addition Operation button click functionality 

add.addEventListener("click", function () {
  console.log(add);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + add.innerText;
  console.log(calculation);
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = enteredNum + newNum;
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
    return;
  });
}); // subtraction Operation button click functionality 

minus.addEventListener("click", function () {
  console.log(minus);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + minus.innerText;
  console.log(calculation);
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = enteredNum - newNum;
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
  });
}); // multiplication Operation button click functionality 

times.addEventListener("click", function () {
  console.log(times);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + times.innerText;
  console.log(calculation);
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = enteredNum * newNum;
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
  });
}); // division Operation button click functionality 

divide.addEventListener("click", function () {
  console.log(divide);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + divide.innerText;
  console.log(calculation);
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = enteredNum / newNum;
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
  });
}); // percentage Operation button click functionality 

pcent.addEventListener("click", function () {
  console.log(pcent);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + pcent.innerText;
  console.log(calculation);
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = enteredNum % newNum;
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
  });
}); // percentage Operation button click functionality 

sqRoot.addEventListener("click", function () {
  console.log(sqRoot);
  if (currentSc.innerText === "") return;

  if (previousSc.innerText !== "") {
    answer();
  } // Shift number to top section and add operation sign


  var calculation = currentSc.innerText + " " + sqRoot.innerText;
  console.log(calculation);
  previousSc.innerText = calculation;
  currentSc.innerText = ""; // start computation 

  totalButton.addEventListener("click", function () {
    console.log(totalButton);
    var sumTotal;
    var enteredNum = parseFloat(previousSc.innerText);
    var newNum = parseFloat(currentSc.innerText);
    if (isNaN(enteredNum) || isNaN(newNum)) return;
    sumTotal = Math.sqrt(enteredNum);
    currentSc.innerText = sumTotal;
    previousSc.innerText = "";
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