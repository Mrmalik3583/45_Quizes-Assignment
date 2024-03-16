"use strict";
// Question 18
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\tQuestion 18:\n");
//  places you'd like to visit
console.log("\tplaces you'd like to visit\n");
let PlacesLiked = ["Saudia Arabia", "Turkey", "Korea", "Australia", "Japan", "Canida", "Europe", "Palestine"];
let fvrtPlaces = ["Saudia Arabia", "Turkey", "Korea", "Australia", "Japan", "Canida", "Europe", "Palestine"];
console.log(PlacesLiked);
//  Order Alphabeticaally
console.log("\tOrdered Alphabetically\n");
fvrtPlaces.sort();
console.log(fvrtPlaces);
console.log("\tArray Is still In its Original Order\n");
console.log(PlacesLiked);
//  Print array in reverse alphabetic order
console.log("\tArray In reverse Alphabetic Order\n");
console.log(fvrtPlaces.sort((a, b) => {
    return b.localeCompare(a);
}));
console.log("\tAgain,my Array Is still In its Original Order\n");
console.log(PlacesLiked);
//   • Reverse the order of your list. Print the array to show that its order has changed.
console.log("\tReverse the Order of Array.\nSo, it's ordered has Changed");
//  • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(fvrtPlaces.reverse());
//   • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\tAgain reversed the list,\n");
console.log(fvrtPlaces.reverse());
//   Order Alphabeticaally
console.log("\tOrdered Alphabetically\n");
console.log(fvrtPlaces.sort());
//  Print array in reverse alphabetic order
console.log("\tArray In reverse Alphabetic Order\n");
console.log(fvrtPlaces.sort((a, b) => {
    return b.localeCompare(a);
}));
