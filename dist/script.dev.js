"use strict";

var press1 = document.getElementById("one");
press1.addEventListener("click", myFunction);

function myFunction() {
  console.log(1);
  document.getElementById("screen").innerHTML = "1";
}

var press2 = document.getElementById("two");
press2.addEventListener("click", function () {
  document.getElementById("screen").innerHTML = "2";
});
var press3 = document.getElementById("three");

press3.onclick = function () {
  document.getElementById("screen").innerHTML = "3";
};

var numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
console.log(numbers[2]); // JS Property (unknown)
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