const currValues = document.querySelector(".current_values");
const prevValues = document.querySelector("previous_values");
const operands = document.querySelector(".operation");
const deletion = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const numbers = document.querySelector(".number");
const negative = document.querySelector(".negative_value");
const decimal = document.querySelector(".decimal");
let operation;

function appendNumber(number) {
    if (number === "." && currValues.innerText === ""){
        currValues.innerText += numbers;
        return;
    }
}
function chooseOperation(operands) {
    if (currValues.innerText === ""){
        compute(operands);
        operation = operands;
        currValues.innerText += operands;
        prevValues.innerText += currValues.innerText;
        currValues.innerText = "";
    }
}
function clearDisplay() {
    currValues.innerText = "";
    prevValues.innerText = "";
}
function compute(operands) {
    let result;
    const prev_val = parseFloat(prevValues.innerText);
    const curr_val = parseFloat(currValues.innerText);

    if (isNaN(prev_val) || isNan(curr_val)) return;
    
    switch (operation){
        case "plus":
            result = prev_val + curr_val;
        break;
        case "subtract":
            result = prev_val - curr_val;
        break;
        case "multiply":
            result = prev_val * curr_val;
        break;
        case "divide":
            result = prev_val / curr_val;
        break;
        default:
            return;
    }
    currValues.innerText = result;
}
number.forEach((numbers) => {
    numbers.addEventListener("click", () => {
        appendNumber(numbers.innerText)
    });
});
operands.forEach((operands) => {
    operands.addEventListener("click", () =>{
    chooseOperation(operands.innerText);
    });
});
clear.addEventListener("click", () => {
    clearDisplay();
});
equal.addEventListener("click", () => {
    compute();
    prevValues.innerText = "";
});
deletion.addEventListener("click", () => {
    currValues.innerText = currValues.innerText.slice(0, -1);
});