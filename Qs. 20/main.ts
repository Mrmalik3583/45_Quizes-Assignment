// Question 20
// 20 .Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
 console.log("\tQuestion 20:\n");

let mountains = ["Kalar Khar", "K-2", "Mount Everest", "Jabl-e-Noor", "Kooh-e-Toor"]
let rivers = ["Ravi", "        Punjab", "Satlaj", "Gehlem", "Chenab"]
let countries = ["        Pakistan         ", "Turkey", "South Korea", "Austraia", "Saudia Arabia"]
let cities = ["Faisalabad", "        Islamabad",          "        Muree", "        Swat", "        Occupied Kashmir"]
let languages = ["        Urdu", "        English", "                Turkish", "                Persian", "Arabic"]
console.log("\t\t\t\t\t\tList of Items\n");
for(let i=0; i <= 4; i++) {
  process.stdout.write(" ");
  console.log(mountains[i], "\t\t", rivers[i], "\t\t", countries[i], "\t\t", cities[i], "\t\t", languages[i]);
}