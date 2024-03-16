"use strict";
// Question 11
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\tQuestion 11:\n");
let besties = ["Aizal Fatima", "Bakht Saqlain", "Amina Noor", "Ziddi Queen", "Killer Eyes"];
console.log(besties[0]);
console.log(besties[1]);
console.log(besties[2]);
console.log(besties[3]);
console.log(besties[4]);
// Another method
console.log("\tSimilar Method of Qs 11\n");
for (let bestie of besties) {
    console.log(bestie);
}
