"use strict";
// Question 37
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("\tQuestion 37:\n");
function make_shirt(size, msg) {
    console.log(`Size of Shirt: ${size}\n${msg}`);
}
make_shirt(40, 'I Love Typescript.(default msgs with too much large size).\n');
make_shirt(32, '"Be kind, for everyone\nYou meet is\nFighting a battle\nYou know nothing about"\n');
make_shirt(28, '\tBe the Change\n\tYou Hope to See\n\tIn the World.');
