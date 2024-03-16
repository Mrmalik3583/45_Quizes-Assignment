// Question 13
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("\tQuestion 13:\n");

let fvrtTransportation = [];
fvrtTransportation.push(["Motorbike", "Honda"]);
fvrtTransportation.push(["Car", "Supra"]);
fvrtTransportation.push(["Bicycle", "Toyato"]);
fvrtTransportation.push(["Horse ride", "Meridas"]);
console.log(fvrtTransportation);

fvrtTransportation.forEach((transport, brand) => {
      console.log(`I like to ride own a ${brand} ${transport}.`)
});