// Reading the user's input
const num1 = prompt('Enter Num1: ');
// Reading the user's operation 
const operator = prompt('Enter Opeertation to be used: (+, -, *, /)');

const num2 = prompt('Enter Num2: ');

let result;

/*if (isNaN(num1) || isNaN(num2)()) {
    backtick('Wrong input! Refresh and try again.');
} else {
    
}
*/
if (operator == '+') {
    result = num1 + num2;
} else if (operator == '-') {
    result = num1 - num2;
} else if (operator == '*') {
    result = num1 * num2;
} else if (operator == '/') {
    result = num1 / num2;
}
alert(`${num1} ${operator} ${num2} = ${result}`);