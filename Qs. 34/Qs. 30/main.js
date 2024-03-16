"use strict";
// Question 30
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
console.log("\tQuestion 30:\n");
let user_names = ["Aizal Fatima", "JAveria Talib", "Wardha", "Naeem", "Malik"];
console.log(`Hello ${user_names[0]},Thank You For Logging in Again.\n`);
console.log(`Hello ${user_names[1]},Thank You For Logging in Again.\n`);
console.log(`Hello ${user_names[2]},Thank You For Logging in Again.\n`);
if (user_names.includes('Naeem')) {
    console.log("Hello Admin/Naeem, would you like to see a status report?\n");
}
;
console.log(`Hello ${user_names[4]},Thank You For Logging in Again.\n`);
