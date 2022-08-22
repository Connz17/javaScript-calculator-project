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
console.log(signs);

const test = [add]
console.log(test);



// Append number function

// Handle Operation function

// Clear Display function
const clear = () => {
    currentSc.innerText = ""
    previousSc.innerText = ""
    previousSc = ""
    currentSc = ""
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

    
const sings = [sqRoot.innerText, pcent.innerText, divide.innerText, times.innerText, minus.innerText, addition.innerText];
console.log(sings);

    for (let index = 0; index < sings.length; index++) {
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
            sumTotal = enteredNum + newNum
            console.log("plus");
        } else if (sings.includes["%"]) {
            sumTotal = enteredNum % newNum
            console.log("percent");
        } else { 
            console.log("no computation happening");
        }
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
    currentSc.innerText = ""       
})


// Addition Operation button click functionality 
add.addEventListener("click", () => {
        console.log(add);
        if (currentSc.innerText === "") return;
        if (previousSc.innerText !== "") {
            answer()
        }
// Shift number to top section and add operation sign
        const calculation = currentSc.innerText + " " + add.innerText
        console.log(calculation)
        previousSc.innerText = calculation;
        currentSc.innerText = ""
// start computation 
        totalButton.addEventListener("click", () => {
        console.log(totalButton);

        let sumTotal 
    const enteredNum = parseFloat(previousSc.innerText)
    const newNum = parseFloat(currentSc.innerText)    
    if (isNaN(enteredNum) || isNaN(newNum)) return
    
    sumTotal = enteredNum + newNum
    currentSc.innerText = sumTotal
    previousSc.innerText = "";
    return
    })    
});

// subtraction Operation button click functionality 
minus.addEventListener("click", () => {
    console.log(minus);
    if (currentSc.innerText === "") return;
    if (previousSc.innerText !== "") {
        answer()
    }
// Shift number to top section and add operation sign
    const calculation = currentSc.innerText + " " + minus.innerText
    console.log(calculation)
    previousSc.innerText = calculation;
    currentSc.innerText = ""
// start computation 
    totalButton.addEventListener("click", () => {
    console.log(totalButton);

    let sumTotal 
const enteredNum = parseFloat(previousSc.innerText)
const newNum = parseFloat(currentSc.innerText)    
if (isNaN(enteredNum) || isNaN(newNum)) return

sumTotal = enteredNum - newNum
currentSc.innerText = sumTotal
previousSc.innerText = "";
})    
});

// multiplication Operation button click functionality 
times.addEventListener("click", () => {
    console.log(times);
    if (currentSc.innerText === "") return;
    if (previousSc.innerText !== "") {
        answer()
    }
// Shift number to top section and add operation sign
    const calculation = currentSc.innerText + " " + times.innerText
    console.log(calculation)
    previousSc.innerText = calculation;
    currentSc.innerText = ""
// start computation 
    totalButton.addEventListener("click", () => {
    console.log(totalButton);

    let sumTotal 
const enteredNum = parseFloat(previousSc.innerText)
const newNum = parseFloat(currentSc.innerText)    
if (isNaN(enteredNum) || isNaN(newNum)) return

sumTotal = enteredNum * newNum
currentSc.innerText = sumTotal
previousSc.innerText = "";
})    
});

// division Operation button click functionality 
divide.addEventListener("click", () => {
    console.log(divide);
    if (currentSc.innerText === "") return;
    if (previousSc.innerText !== "") {
        answer()
    }
// Shift number to top section and add operation sign
    const calculation = currentSc.innerText + " " + divide.innerText
    console.log(calculation)
    previousSc.innerText = calculation;
    currentSc.innerText = ""
// start computation 
    totalButton.addEventListener("click", () => {
    console.log(totalButton);

    let sumTotal 
const enteredNum = parseFloat(previousSc.innerText)
const newNum = parseFloat(currentSc.innerText)    
if (isNaN(enteredNum) || isNaN(newNum)) return

sumTotal = enteredNum / newNum
currentSc.innerText = sumTotal
previousSc.innerText = "";
})    
});

// percentage Operation button click functionality 
pcent.addEventListener("click", () => {
    console.log(pcent);
    if (currentSc.innerText === "") return;
    if (previousSc.innerText !== "") {
        answer()
    }
// Shift number to top section and add operation sign
    const calculation = currentSc.innerText + " " + pcent.innerText
    console.log(calculation)
    previousSc.innerText = calculation;
    currentSc.innerText = ""
// start computation 
    totalButton.addEventListener("click", () => {
    console.log(totalButton);

    let sumTotal 
const enteredNum = parseFloat(previousSc.innerText)
const newNum = parseFloat(currentSc.innerText)    
if (isNaN(enteredNum) || isNaN(newNum)) return

sumTotal = enteredNum % newNum
currentSc.innerText = sumTotal
previousSc.innerText = "";
})    
});

// percentage Operation button click functionality 
sqRoot.addEventListener("click", () => {
    console.log(sqRoot);
    if (currentSc.innerText === "") return;
    if (previousSc.innerText !== "") {
        answer()
    }
// Shift number to top section and add operation sign
    const calculation = currentSc.innerText + " " + sqRoot.innerText
    console.log(calculation)
    previousSc.innerText = calculation;
    currentSc.innerText = ""
// start computation 
    totalButton.addEventListener("click", () => {
    console.log(totalButton);

    let sumTotal 
const enteredNum = parseFloat(previousSc.innerText)
const newNum = parseFloat(currentSc.innerText)    
if (isNaN(enteredNum) || isNaN(newNum)) return

sumTotal = Math.sqrt(enteredNum)
currentSc.innerText = sumTotal
previousSc.innerText = "";
})    
});


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

    
