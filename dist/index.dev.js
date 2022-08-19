"use strict";

// // getElementsByTagName
// const todoHeading = document.getElementsByTagName("h1")[0];
// todoHeading.innerHTML += " Today!";
// console.log(todoHeading);
// // getElementsByClassName
// // getElementById
// const addButton = document.getElementById("add-button");
// console.log(addButton);
// // querySelector
// const inputBox = document.querySelector("input");
// console.log(inputBox);
// const list = document.querySelector("ul");
// console.log(list);
// // querySelectorAll
// const items = document.querySelectorAll("li");
// console.log(items);
// numbers.forEach((numberButton) => {
//      numberButton.addEventListener("click", handleNumberPress);
//    });
// set previous number variable equal to zero. 
// let previousNumb = (" ");
// console.log(previousNumb);
// const handleNumberPress = () => {
//     previousNumb += numbers     
//     console.log(handleNumberPress);
//     }
//     numbers.forEach((number) => {
//         number.addEventListener("click", handleNumberPress);
//     });
// functions of My calculator:
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
// Add Number button click functionality 


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

totalButton.addEventListener("click", function () {
  console.log(totalButton);
  var answer;
  var enteredNum = parseFloat(previousSc.innerText);
  var newNum = parseFloat(currentSc.innerText);

  switch (operationsBtns.innerText) {
    case "+":
      answer = enteredNum + newNum;
      break;

    case "-":
      answer = enteredNum - newNum;
      break;

    case "*":
      answer = enteredNum * newNum;
      break;

    case "÷":
      answer = enteredNum / newNum;

    default:
      break;
  }
}); // add number to display
// numbersButton.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         event.target.value = number.toString();
//         console.log(number);
//         })
//     });