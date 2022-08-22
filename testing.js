
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

const sqRoot = document.getElementById("root");
console.log(sqRoot);

const pcent = document.getElementById("percentage");
console.log(pcent);

const divide = document.getElementById("divide");
console.log(divide);

const times = document.getElementById("multiply");
console.log(times);

const minus = document.getElementById("takeAway");
console.log(minus);

const add = document.getElementById("plus");
console.log(add);

// add elements to sings
const squareRoot = sqRoot.toString() + sqRoot.innerText
console.log(squareRoot);

const percentage = pcent.toString() + pcent.innerText
console.log(percentage);

const division = divide.toString() + divide.innerText
console.log(division);

const multiply = times.toString() + times.innerText
console.log(multiply);

const subtract = minus.toString() + minus.innerText
console.log(subtract);

const addition = add.toString() + add.innerText
console.log(addition);


// Create arrays from HTML collections
const numbersBtns = Array.from(numbersButton);
console.log(numbersBtns);

const operationsBtns = Array.from(operationsButton);
console.log(operationsBtns);

const operations = [squareRoot, percentage, division, multiply, subtract, addition];
console.log(operations);

const operations1 = [squareRoot.innerText, percentage.innerText, division.innerText, multiply.innerText, subtract.innerText, addition.innerText];
console.log(operations1);

const operations2 = [squareRoot.toString(), percentage.toString(), division.toString(), multiply.toString(), subtract.toString(), addition.toString()];
console.log(operations2);

const signs = [sqRoot.innerText, pcent.innerText, divide.innerText, times.innerText, minus.innerText, add.innerText];
console.log(signs.toString());

const test = [add.toString()]
console.log(test);


// Append number function

// Handle Operation function

// Clear Display function
const clear = () => {
    currentSc.innerText = ""
    previousSc.innerText = ""
} 

// Update display function


// Delete item on display function
const back = () => {
    currentSc.innerText = currentSc.innerText.toString().slice(0, -1)
}

// Final total function 
const answer = () => {
    
    let sumTotal 
    const enteredNum = parseFloat(previousSc.innerText)
    const newNum = parseFloat(currentSc.innerText)    
    if (isNaN(enteredNum) || isNaN(newNum)) return

    switch (operation.innerText) {
        case "+":
            sumTotal = enteredNum + newNum
            console.log("plus");
            break;
    
        default:
            console.log("no computation happening");
            
    }

    currentSc.innerText = sumTotal
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
operations1.forEach((operation) => {
    operation.addEventListener("click", () => {
        console.log(operation);
                // signs.forEach((sign) => {
        //     // match = operation.innerText + sign;
        //     // console.log(match);
        //     // switch case to match the sign to operation and make new variable

        // });
        if (currentSc.innerText === "") return;
        if (previousSc.innerText !== "") {
            answer()
        }
// Shift number to top section and add operation sign

        previousSc.innerText = currentSc.innerText + " " + operation.innerText
        // console.log(previousSc.innerText);
        currentSc.innerText = ""
        
    })

// add All Equals button click functionality
    totalButton.addEventListener("click", () => {
        
        let sumTotal 
        const enteredNum = parseFloat(previousSc.innerText)
        const newNum = parseFloat(currentSc.innerText)    
        if (isNaN(enteredNum) || isNaN(newNum)) return
        console.log(previousSc.innerText.toString());
        switch (previousSc.innerText.toString()) {
            
            case "+":
                sumTotal = enteredNum + newNum
                console.log("plus");
                break;
        
            default:
                console.log("no computation happening");
                
        }
    


        currentSc.innerText = sumTotal
        previousSc.innerText = "";        console.log(totalButton);


});





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
