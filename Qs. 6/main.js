"use strict";
// Question 6
// 6 .Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("\tQuestion 6:\n");
let PersonName = "      \t Anabya Fatima     ";
console.log("Name With Whitespaces:", PersonName);
let strippedName = PersonName.trim();
console.log("Stripped Name:", strippedName);
