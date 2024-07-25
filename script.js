// Grab all calculator buttons
const numbersBtns = document.querySelectorAll(".calculator__buttons--number");
console.log(numbersBtns);

const operationsBtns = document.querySelectorAll(".calculator__buttons--operation")
console.log(operationsBtns);

const clearButton = document.getElementById("AC");
console.log(clearButton);

const backspaceButton = document.getElementById("delete");
console.log(backspaceButton);

const equalsButton = document.getElementById("equals");
console.log(equalsButton);

// Grab Screen elements
const bottomScreen = document.getElementById("bottomScreen");
console.log(bottomScreen);

const topScreen = document.getElementById("topScreen");
console.log(topScreen);

// Functions
const appendNumber = (number) => {
    if (number === "." && bottomScreen.innerText.includes(".")) return
    bottomScreen.innerText = bottomScreen.innerText + number.toString()
};

const removeLastInput = () => {
    bottomScreen.innerText = bottomScreen.innerText.toString().slice(0, -1)
}

const clearScreen = () => {
    topScreen.innerText=''
    bottomScreen.innerText = ''
}

const selectOperation = (operation) => {
    if (bottomScreen.innerText === '') return
    if (topScreen.innerText!== '') {
        calculateAnswer()
    }
    topScreen.innerText = `${bottomScreen.innerText}  ${operation.toString()}`
    bottomScreen.innerText = ''
}

const calculateAnswer = () => {
    let calculation
    const previousNum = (parseFloat(topScreen.innerText))
    const currentNum = (parseFloat(bottomScreen.innerText))
    if(isNaN(currentNum) || isNaN(previousNum)) return
    switch (topScreen.innerText.slice(-1)) {
        case '+':
            calculation = previousNum + currentNum
            break;
        case '-':
            calculation = previousNum - currentNum
            break;
        case '÷':
            calculation = previousNum / currentNum
            break;
        case 'X':
            calculation = previousNum * currentNum
            break;
        case '%':
            calculation = previousNum / 100 *  currentNum
            break;
        case '√':
            calculation = Math.sqrt(previousNum)
            break;
        default:
            return;
    }
    bottomScreen.innerText = calculation
    topScreen.innerText = ''    
}

// const updateDisplayNumber = (number) => {
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

numbersBtns.forEach((number) => {
    number.addEventListener("click", () => {
        appendNumber(number.value)
    })
})


operationsBtns.forEach((operation) =>{
    operation.addEventListener("click", ()=>{
        selectOperation(operation.innerText)
    })
})

equalsButton.addEventListener("click", (calculateAnswer))
clearButton.addEventListener("click", (clearScreen))
backspaceButton.addEventListener("click",(removeLastInput))
