"use strict";
// Question 44
// 44. Sandwiches: Write a  function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log("\tQuestion 44:\n");
function make_Sandwiches(...items) {
    console.log("Sandwitch Order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`${items[i]}`);
    }
    console.log("Enjoy your Sandwich!");
}
make_Sandwiches('Lettuce', 'Tomato', 'Cheese');
make_Sandwiches('Ham', 'Mayo');
make_Sandwiches('Turkey');
