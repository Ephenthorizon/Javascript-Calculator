// Reading the user's input
const demo_num1 = prompt('Enter Num1: ');
const num1 = demo_num1.replace(/ /g, '');

// Reading the user's operation 
const demo_operator = prompt('Enter Opeertation to be used: (+, -, *, /)');
//Removes white spaces incase the useer includes it
const operator = demo_operator.replace(/ /g, '');

const demo_num2 = prompt('Enter Num2: ');
const num2 = demo_num2.replace(/ /g, '');

let result;

if (operator == '+') {
    result = num1 + num2;
} else if (operator == '-') {
    result = num1 - num2;
} else if (operator == '*') {
    result = num1 * num2;
} else if (operator == '/') {
    result = num1 / num2;
} else {
    result = 'invalid operation'
}
alert(`${num1} ${operator} ${num2} = ${result}`);
