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
var numbers = document.getElementsByClassName("calculator__buttons--number");
console.log(numbers);
var operation = document.getElementsByClassName("calculator__buttons--operation");
console.log(operation);
var currentSc = document.getElementById("screenCurr");
console.log(currentSc);
var previousSc = document.getElementById("screenPrev");
console.log(previousSc);
var clear = document.getElementById("AC");
console.log(clear);
var cancel = document.getElementById("delete");
console.log(cancel);
var total = document.getElementById("equals");
console.log(total);
var previousNumb = " ";
console.log(previousNumb);

var handleNumberPress = function handleNumberPress() {
  previousNumb += numbers;
  console.log(handleNumberPress);
};

numbers.forEach(function (number) {
  number.addEventListener("click", handleNumberPress);
});