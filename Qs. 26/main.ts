// Question 26
// 26 .Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
 console.log("\tQuestion 26:\n");

let alien_color = "green";

if(alien_color === "green") {
  console.log("The Player just earned 5 points.\n");
} else {
  console.log("Player has'nt earned 5 points\n");
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if(alien_color !== "green") {
  console.log("The Player has'nt earned 10 points.\n");
} else {
  console.log("The Player just earned 10 points.\n");
}