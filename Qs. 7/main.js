"use strict";
// Question 7
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("\tQuestion 7:\n");
const byAddition = 4 + 4;
console.log("byAddition:", byAddition);
const bySubtraction = 10 - 2;
console.log("bySubtraction:", bySubtraction);
const byMultiplication = 4 * 2;
console.log("byMultiplication:", byMultiplication);
const byDivision = 16 / 2;
console.log("byDivision:", byDivision);
// Another Method
console.log("\tAnother Method\n");
function sum(x, y) {
    console.log("By Addition:", x + y);
}
sum(5, 3);
function sub(x, y) {
    console.log("By Subtraction:", x - y);
}
sub(10, 2);
function mul(x, y) {
    console.log("By Multiplication:", x * y);
}
mul(4, 2);
function div(x, y) {
    console.log("By Division:", x / y);
}
div(16, 2);
