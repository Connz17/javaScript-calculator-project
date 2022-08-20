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
handleNumber = (number) => {
    if (number.innerText === "." && currentSc.innerText.includes(".")) return
    number.toString = number.innerText;
    currentSc.innerText = currentSc.innerText + number.toString
}

// Handle Operation function
handleOperation = (operation) => {
    if (currentSc.innerText === "") return;
        if (previousSc.innerText !== "") {
            answer()
        }    
    const calculation = currentSc.innerText + " " + operation.innerText
    previousSc.innerText = calculation
    currentSc.innerText = ""
}

// Clear Display function
clear = () => {
    currentSc.innerText = ""
    previousSc.innerText = ""
} 

// Update display function
updateDisplay = () => {
currentSc.innerText = currentSc
previousSc.innerText = previousSc

}
// Delete item on display function
back = () => {
    currentSc.innerText = currentSc.innerText.toString().slice(0, -1)
}

// Final total function 
answer = () => {
    let total 
    const enteredNum = previousSc.innerText 
    const newNum = currentSc.innerText
    if (isNaN(enteredNum) || isNaN(newNum)) return
    
    

    switch (operation) {
        case "-":
            total = parseFloat(enteredNum) - parseFloat(newNum) 
            break;
        case operationsBtns[5]:
            total = parseFloat(enteredNum) + parseFloat(newNum)
            break;
        case operationsBtns[3]:
            total = parseFloat(enteredNum) * parseFloat(newNum)
            break;
        case operationsBtns[2]:
            total = parseFloat(enteredNum) / parseFloat(newNum)
            break;
        case operationsBtns[1]:
            total = parseFloat(enteredNum) % parseFloat(newNum)
            break;
        case operationsBtns[0]: 
            total = Math.sqrt(parseFloat(enteredNum))
        default:
            break;
    }
    currentSc.innerText = total
    previousSc.innerText = "";
}


// Add Number button click functionality 
numbersBtns.forEach((number) => {
    number.addEventListener("click", () => {
    handleNumber(number.innerText);
    updateDisplay()
        })
    })


// Add Operation button click functionality 
operationsBtns.forEach((operation) => {
    operation.addEventListener("click", () => {  
    handleOperation(operation.innerText);
    updateDisplay()
        })
    })   
    
    // add All Clear button click functionality
clearButton.addEventListener("click", () => {
    clear()
    updateDisplay()
})

// add All Delete button click functionality
cancelButton.addEventListener("click", () => {
    back()
    updateDisplay()
})

// add All Equals button click functionality
totalButton.addEventListener("click", () => {
    answer();
    updateDisplay()
})
    