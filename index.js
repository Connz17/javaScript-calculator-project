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

const numbers = document.getElementsByClassName("calculator__buttons--number");
console.log(numbers);

const operation = document.getElementsByClassName("calculator__buttons--operation");
console.log(operation);

const currentSc = document.getElementById("screenCurr");
console.log(currentSc);

const previousSc = document.getElementById("screenPrev");
console.log(previousSc);

const clear = document.getElementById("AC");
console.log(clear);

const cancel = document.getElementById("delete");
console.log(cancel);

const total = document.getElementById("equals");
console.log(total);


let previousNumb = (" ");
console.log(previousNumb);



const handleNumberPress = () => {
    previousNumb += numbers     
    console.log(handleNumberPress);
    }



    numbers.forEach((number) => {
        number.addEventListener("click", handleNumberPress);
    });


