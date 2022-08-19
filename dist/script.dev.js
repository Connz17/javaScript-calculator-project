"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var numbers = document.getElementsByClassName("calculator__buttons--number");
console.log(numbers);
var operations = document.getElementsByClassName("calculator__buttons--operation");
console.log(operations);
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

clear.onclick = function () {
  previousSc = (_readOnlyError("previousSc"), "");
  currentSc = (_readOnlyError("currentSc"), "");
  operations = (_readOnlyError("operations"), "");
}; // appendNumber (Number) {
// }
// selectOperation (operation) {
// }


numbers.forEach(function (numberButton) {
  numberButton.addEventListener("click", function () {
    currentSc.appendNumber(numberButton);
  });
}); // const typeNumber = numbers.target 
// let press1 = document.getElementById("one");
// press1.addEventListener("click", myFunction);
// function myFunction() {
//     console.log(1)
//     document.getElementById("screenCurr").innerHTML = "1";
// }
// const press2 = document.getElementById("two");
// press2.addEventListener("click", function() {
//     document.getElementById("screenCurr").innerHTML = "2";
// });
// const press3 = document.getElementById("three");
//     press3.onclick = function() {
//         document.getElementById("screenCurr").innerHTML = "3"; 
//     }
// const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
// console.log(numbers[2]);
// constructor ()
// JS Property (unknown)
// press.onclick
// ADD EVENT LISTENER CODE
// element.addEventListener("click", myFunction);
// 
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }
// ADD EVENT LISTENER CODE (SHORT)
// element.addEventListener("click", function() {
// document.getElementById("demo").innerHTML = "Hello World";
//   });
// clearButton.addEventListener("click", handleClearPress);
// numbers.forEach((numberButton) => {
// numberButton.addEventListener("click", handleNumberPress);
//   });