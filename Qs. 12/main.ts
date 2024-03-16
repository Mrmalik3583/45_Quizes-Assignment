// Question 12
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\tQuestion 12:\n");


let bestie = ["Aizal Fatima:", "Bakht Saqlain:", "Amina Noor:", "Ziddi Queen:", "Killer Eyes:"];

console.log(bestie[0], "Anything is possible when you have your bestie there to support you.");
console.log(bestie[1], "Anything is possible when you have your bestie there to support you.");
console.log(bestie[2],  "Anything is possible when you have your bestie there to support you.");
console.log(bestie[3], "Anything is possible when you have your bestie there to support you.");
console.log(bestie[4], "Anything is possible when you have your bestie there to support you.");
// Another Method
console.log("\tAnother Method\n");

for(let i=0; i< bestie.length; i++) {
       console.log(bestie[i] , "Anything is possible when you have your bestie there to support you.");
}
