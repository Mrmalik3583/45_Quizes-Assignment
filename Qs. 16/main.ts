// Question 16
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
console.log("\tQuestion 16:\n");

let guestList = ["Ziddi Queen", "Killer Eyes", "Naeem Hussain", "Maklik", "M.Saim", "Anna Doll", "Mr.Jk", "Anaya Fatima"];

// informing people that you found a bigger dinner table.
console.log("I found a Bigger Dinner Table.");

// • Add one new guest to the beginning of your array.
guestList.unshift("Dur-e-Adan");
console.log(guestList);

// • Add one new guest to the middle of your array. 
guestList.splice(3 , 0 , "Dur-e-Adan");
console.log(guestList);

// • Use append() to add one new guest to the end of your list.

guestList.appened('Dur-e-Fishan');

// • Print a new set of invitation messages, one for each person in your list.
guestList.forEach((guestListName) => {
    console.log(`${guestListName} :You are invited to a great dinner in someone's ownwer.Please must be come and join us.`);
});