// arithmetic operations

//Adds two numbers
function add(a, b) {
    return a + b;
}

//Subtracts two numbers
function subtract(a, b) {
    return a - b;
}

//Multiplies two numbers
function multiply(a, b) {
    return a * b;
}

//Divides two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}



module.exports = {
    add,
    subtract,
    multiply,
    divide
};
