"use strict";

// Grab all calculator buttons
var numbersBtns = document.querySelectorAll(".calculator__buttons--number");
console.log(numbersBtns);
var operationsBtns = document.querySelectorAll(".calculator__buttons--operation");
console.log(operationsBtns);
var clearButton = document.getElementById("AC");
console.log(clearButton);
var backspaceButton = document.getElementById("delete");
console.log(backspaceButton);
var equalsButton = document.getElementById("equals");
console.log(equalsButton); // Grab Screen elements

var bottomScreen = document.getElementById("bottomScreen");
console.log(bottomScreen);
var topScreen = document.getElementById("topScreen");
console.log(topScreen); // Functions

var appendNumber = function appendNumber(number) {
  if (number === "." && bottomScreen.innerText.includes(".")) return;
  bottomScreen.innerText = bottomScreen.innerText + number.toString();
};

var removeLastInput = function removeLastInput() {
  bottomScreen.innerText = bottomScreen.innerText.toString().slice(0, -1);
};

var clearScreen = function clearScreen() {
  topScreen.innerText = '';
  bottomScreen.innerText = '';
};

var selectOperation = function selectOperation(operation) {
  if (bottomScreen.innerText === '') return;

  if (topScreen.innerText !== '') {
    calculateAnswer();
  }

  topScreen.innerText = "".concat(bottomScreen.innerText, "  ").concat(operation.toString());
  bottomScreen.innerText = '';
};

var calculateAnswer = function calculateAnswer() {
  var calculation;
  var previousNum = parseFloat(topScreen.innerText);
  var currentNum = parseFloat(bottomScreen.innerText);
  if (isNaN(currentNum) || isNaN(previousNum)) return;

  switch (topScreen.innerText.slice(-1)) {
    case '+':
      calculation = previousNum + currentNum;
      break;

    case '-':
      calculation = previousNum - currentNum;
      break;

    case '÷':
      calculation = previousNum / currentNum;
      break;

    case 'X':
      calculation = previousNum * currentNum;
      break;

    case '%':
      calculation = previousNum / 100 * currentNum;
      break;

    case '√':
      calculation = Math.sqrt(previousNum);
      break;

    default:
      return;
  }

  bottomScreen.innerText = calculation;
  topScreen.innerText = '';
}; // const updateDisplayNumber = (number) => {
//     const stringNumber = number.toString()
//     const integerDigits = parseFloat(stringNumber.split('.')[0])
//     const decimalDigits = stringNumber.split('.')[1]
//     let intDisplay 
//     if(isNaN(integerDigits)) {
//         intDisplay = ''
//     } else {
//         intDisplay = integerDigits.toLocaleString('en', {
//             maximumFractionDigits: 0
//         }) 
//     }
//     if (decimalDigits != null) {
//         return `${intDisplay}.${decimalDigits}`
//     } else {
//         return intDisplay
//     }
// }


numbersBtns.forEach(function (number) {
  number.addEventListener("click", function () {
    appendNumber(number.value);
  });
});
operationsBtns.forEach(function (operation) {
  operation.addEventListener("click", function () {
    selectOperation(operation.innerText);
  });
});
equalsButton.addEventListener("click", calculateAnswer);
clearButton.addEventListener("click", clearScreen);
backspaceButton.addEventListener("click", removeLastInput);