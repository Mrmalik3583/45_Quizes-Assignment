// Question 15
// 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("\tQuestion 15:\n");

let guestList = ["Ziddi Queen", "Killer Eyes", "Naeem Hussain", "Maklik", "M.Saim", "Anna Doll", "Mr.Jk", "Anaya Fatima"];

console.log("Killer Eyes cannot make it & join us on Great Dinner.Bcz of some Issues.\n");

guestList.push("Bakhtuu");

// Guest who cannot make it
console.log("Killer Eyes cannot make it & join us on Great Dinner.Bcz of some Issues.\n");
console.log(guestList);

// Replacing name of guest
guestList.splice(1, 1, "Chasmish");
 console.log(guestList[1], ":You are invited to a great dinner in someone's ownwer.Please must be come and join us.I hope You will come on my Invitation.\n");

//  second masg to all guests
guestList.forEach((guestListName) => {
    console.log(`${guestListName} :You are invited to a great dinner in someone's ownwer.Please must be come and join us.\n`);
 });