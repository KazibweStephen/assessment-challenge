// Get process.stdin as the standard input object.
var standard_input = process.stdin;
var convertNumberToWords = require('./numberToWords');

// Set input character encoding.
standard_input.setEncoding('utf-8');

console.log("Please input number to convert to words.");

// When user input data and click enter key.
standard_input.on('data', function (data) {
    if(data === 'exit\n'){
        console.log("Quiting app...");
        process.exit();
    } else {
        let cleanInput = data.substring(0, data.length - 1);
        console.log(convertNumberToWords(cleanInput));
        console.log("\nEnter 'exit' to quit app \nor Input another number");
    }
});