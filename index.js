
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

const addition = document.getElementById("plus");
console.log(addition);

// Create arrays from HTML collections
const numbersBtns = Array.from(numbersButton);
console.log(numbersBtns);

const operationsBtns = Array.from(operationsButton);
console.log(operationsBtns);

sign = operationsBtns.innerText
console.log(sign);

// Append number function

// Handle Operation function

// Clear Display function
const clear = () => {
    currentSc.innerText = ""
    previousSc.innerText = ""
    previousSc.innerHTML = ""
    currentSc.innerHTML = ""
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
    return
    
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
addition.addEventListener("click", () => {
    console.log(addition);
    if (currentSc.innerText === "") return;
    if (previousSc.innerText !== "") {
        answer()
    }
// Shift number to top section and add operation sign
    const calculation = currentSc.innerText + " " + addition.innerText
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
    return;    
    })  
return
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
    previousSc.innerText = calculation;
    currentSc.innerText = ""
// start computation 
    totalButton.addEventListener("click", () => {
    preventDefault()        
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

// Multiplication Operation button click functionality 
times.addEventListener("click", () => {
    console.log(times);
    if (currentSc.innerText === "") return;
    if (previousSc.innerText !== "") {
        answer()
    }
// Shift number to top section and add operation sign
    const calculation = currentSc.innerText + " " + times.innerText
    previousSc.innerText = calculation;
    currentSc.innerText = ""
// start computation 
    totalButton.addEventListener("click", () => {
    preventDefault()
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

// Division Operation button click functionality 
divide.addEventListener("click", () => {
    console.log(divide);
    if (currentSc.innerText === "") return;
    if (previousSc.innerText !== "") {
        answer()
    }
// Shift number to top section and add operation sign
    const calculation = currentSc.innerText + " " + divide.innerText
    previousSc.innerText = calculation;
    currentSc.innerText = ""
// start computation 
    totalButton.addEventListener("click", () => {
    preventDefault()
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
   
// Percentage Operation button click functionality 
pcent.addEventListener("click", () => {
    console.log(pcent);
    if (currentSc.innerText === "") return;
    if (previousSc.innerText !== "") {
        answer()
    }
// Shift number to top section and add operation sign
    const calculation = currentSc.innerText + " " + pcent.innerText
    previousSc.innerText = calculation;
    currentSc.innerText = ""
// start computation 
    totalButton.addEventListener("click", () => {
    preventDefault()
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
   
// Square Root Operation button click functionality 
sqRoot.addEventListener("click", () => {
    console.log(sqRoot);
    if (currentSc.innerText === "") return;
    if (previousSc.innerText !== "") {
        answer()
    }
// Shift number to top section and add operation sign
    const calculation = currentSc.innerText + " " + sqRoot.innerText
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
// totalButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     answer()
//     console.log(totalButton);
// });