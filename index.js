
// ALL HTML elements is variables:
const  numbersButton = document.getElementsByClassName("calculator__buttons--number");
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
back = () => {
    currentSc.innerText = currentSc.innerText.toString().slice(0, -1)
}

// Final total function 
answer = () => {
    let total 
    const enteredNum = parseFloat(previousSc.innerText) 
    const newNum = parseFloat(currentSc.innerText)

    switch (operation.innerText) {
        case "+":
            total = (enteredNum + newNum)
            break;
        case "-":
            total = enteredNum - newNum
            break;
        case "*":
            total = enteredNum * newNum
            break;
        case "÷":
            total = enteredNum / newNum
            break;
        case "%":
            total = enteredNum % newNum
            break;
        case "√": 
            total = Math.sqrt(enteredNum)
        default:
            break;
    }
    currentSc.innerText = total
    previousSc.innerText = "";
    
}


// Add Number button click functionality 
numbersBtns.forEach((number) => {
    number.addEventListener("click", () => {
        console.log(number);
        number.toString = number.innerText;
        const bigNum = number.toString
        if (number.innerText === "." && currentSc.innerText.includes(".")) return
        currentSc.innerText = currentSc.innerText + bigNum
        })    
})


// Add Operation button click functionality 
operationsBtns.forEach((operation) => {
    operation.addEventListener("click", () => {
        console.log(operation);
        if (currentSc.innerText === "") return;
        if (previousSc.innerText !== "") {
            answer()
        }
// Shift number to top section and add operation sign
        const calculation = currentSc.innerText + " " + operation.innerText
        previousSc.innerText = calculation;
        currentSc.innerText = ""
    })
})    


// add All Clear button click functionality
clearButton.addEventListener("click", (clear))
    console.log(clearButton);
// Clear the display
    // currentSc.innerHTML = ""
    // previousSc.innerHTML = ""


// add All Delete button click functionality
cancelButton.addEventListener("click", (back))
    console.log(cancelButton);
// Delete last number
    // currentSc.innerText = currentSc.innerText.toString().slice(0, -1)


// add All Equals button click functionality
totalButton.addEventListener("click", (answer))
    console.log(totalButton);
