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
let numbersButton = document.getElementsByClassName("calculator__buttons--number");
console.log(numbersButton);

const operationsButton = document.getElementsByClassName("calculator__buttons--operation");
console.log(operationsButton);

const currentSc = document.getElementById("screenCurr");
console.log(currentSc);

const previousSc = document.getElementById("screenPrev");
console.log(previousSc);

const clearButton = document.getElementById("AC");
console.log(clearButton);

const cancelButton = document.getElementById("delete");
console.log(cancelButton);

const totalButton = document.getElementById("equals");
console.log(totalButton);

// Create arrays from HTML collections
const numbersBtns = Array.from(numbersButton);
console.log(numbersBtns);

const operationsBtns = Array.from(operationsButton);
console.log(operationsBtns);


// Append number function


// Handle Operation function

// Clear Display function
clear = () => {
    currentSc.innerText = ""
    previousSc.innerText = ""
} 

// Update display function

// Delete item on display function

// Final total function 





// Add Number button click functionality 
numbersBtns.forEach((number) => {
    number.addEventListener("click", () => {
        console.log(number);
        number.toString = number.innerText;
        const bigNum = number.toString
        currentSc.innerText = currentSc.innerText + bigNum
        })    
})


// Add Operation button click functionality 
operationsBtns.forEach((operation) => {
    operation.addEventListener("click", () => {
        console.log(operation);
        })    
})


// add All Clear button click functionality
clearButton.addEventListener("click", (clear))
    console.log(clearButton);
// Clear the display
    // currentSc.innerHTML = ""
    // previousSc.innerHTML = ""



// add All Delete button click functionality
cancelButton.addEventListener("click", () => {
    console.log(cancelButton);
})


// add All Equals button click functionality
totalButton.addEventListener("click", () => {
    console.log(totalButton);
})







// add number to display

// numbersButton.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         event.target.value = number.toString();
//         console.log(number);
//         })
//     });