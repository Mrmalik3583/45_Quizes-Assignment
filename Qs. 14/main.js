"use strict";
// Question 14
// 14 .Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\tQuestion 14:\n");
let guest = ["Ziddi Queen", "Killer Eyes", "Naeem Hussain", "Maklik"];
guest.forEach((guestName) => {
    console.log(`Mr/Mrs.${guestName}, You are invited to a great dinner in someone's ownwer.Please must be come and join us.\n`);
});
// Another Method
for (let i = 0; i < guest.length; i++) {
    console.log(guest[i], "You are invited to a great dinner in someone's ownwer.Please must be come and join us.");
}
