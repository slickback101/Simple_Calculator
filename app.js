// Import built-in Node.js module
const path = require('path');
const readline = require('readline');

// Import third-party module
const colors = require('colors');

// Import custom calculator module
const calculator = require('./my_module/calculator');

// colors Configuration
colors.setTheme({
    addition: 'green',
    subtraction: 'blue',
    multiplication: 'yellow',
    division: 'magenta',
    error: 'red',
    info: 'cyan'
});

// Display application information using built-in module
console.log(`Running calculator from: ${path.basename(__filename)}`.info);

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// For Display
function displayMenu() {
    console.log('\n===== NODE.JS CALCULATOR ====='.info);
    console.log('1. Addition'.green);
    console.log('2. Subtraction'.blue);
    console.log('3. Multiplication'.yellow);
    console.log('4. Division'.magenta);
    console.log('5. Exit'.gray);
    
    rl.question('\nChoose an operation (1-5): ', (choice) => {
    switch(choice) {
        case '1':
        performCalculation('add');
        break;
        case '2':
        performCalculation('subtract');
        break;
        case '3':
        performCalculation('multiply');
        break;
        case '4':
        performCalculation('divide');
        break;
        case '5':
        console.log('Goodbye!'.rainbow);
        rl.close();
        break;
        
        default:
        console.log('Invalid option! Please try again.'.error);
        displayMenu();
    }
});
}

// Get user input
function performCalculation(operation) {
    rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        let result;
        try {
        switch(operation) {
            case 'add':
            result = calculator.add(num1, num2);
            console.log(`Result: ${num1} + ${num2} = ${result}`.addition);
            break;
            case 'subtract':
            result = calculator.subtract(num1, num2);
            console.log(`Result: ${num1} - ${num2} = ${result}`.subtraction);
            break;
            case 'multiply':
            result = calculator.multiply(num1, num2);
            console.log(`Result: ${num1} × ${num2} = ${result}`.multiplication);
            case 'divide':
            result = calculator.divide(num1, num2);
            console.log(`Result: ${num1} ÷ ${num2} = ${result}`.division);
            break;
        }
    } catch (error) {
        console.log(`Error: ${error.message}`.error);
    }
    
    displayMenu();
    });
});
}


console.log('Node.js Calculator Application'.rainbow.bold);
console.log('This application demonstrates the use of different types of modules:'.info);
console.log('- Built-in modules: path, readline'.info);
console.log('- Third-party module: colors'.info);
console.log('- Custom module: calculator'.info);


displayMenu();