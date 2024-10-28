// Grab all calculator buttons
const numbersBtns = document.querySelectorAll(".calculator__buttons--number");

const operationsBtns = document.querySelectorAll(".calculator__buttons--operation")

const clearButton = document.getElementById("AC");

const backspaceButton = document.getElementById("delete");

const equalsButton = document.getElementById("equals");

// Grab Screen elements
const bottomScreen = document.getElementById("bottomScreen");

const topScreen = document.getElementById("topScreen");

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
        case '/':
            calculation = previousNum / currentNum
            break;
        case 'X':
            calculation = previousNum * currentNum
            break;
        case '*':
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

document.addEventListener("keydown", (event)=>{
    if(!isNaN(event.key) || event.key === ".") {
        appendNumber(event.key)
    } else if (event.key === "/" || event.key === "*" || event.key === "-" || event.key === "+") {
        selectOperation(event.key)
    } else if (event.key === "Enter"){
        calculateAnswer()
    } else if (event.key === "Backspace"){
        removeLastInput()
    } else if (event.key === "Delete"){
        clearScreen()
    }
})




