// Question 17
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("\tQuestion 17:\n");

let guestList = ["Ziddi Queen", "Killer Eyes", "Naeem Hussain", "Maklik", "M.Saim"];
//  prints a message saying that you can invite only two people for dinner.
console.log(guestList , "\nSorry, I can Invite only two People.Bcz place Is becoming too short.Only two guest have to sit here.\n");
//  print a message to that  person letting them know you’re sorry you can’t invite them to dinner.
guestList.pop();
guestList.pop();
guestList.pop();
console.log(`"Naeem Hussain", "Maik", "M.Saim" : I’am sorry I can’t invite you to dinner.\n`);
for(let i=0; i< guestList.length; i++) {
    console.log(guestList[i], "You are still Invited to Dinner.\n");
};
//  • Remove the last two names from your list, so you have an empty list.
guestList.pop();
guestList.pop();
//  Print your list to make sure you actually have an empty list at the end of your program.
console.log(guestList, "Mine Guest List is Empty.");