//  Question 29
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 console.log("\tQuestion 29:\n");

let fvrtFruits = ["Apple", "Mango", "Pineapple", "Stawberry", "Melon"]
function fvrtFruit() {
    let fvrtFruits = ["Apple", "Mango", "Stawberry"]
     console.log(fvrtFruits);
}
fvrtFruit();
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if(fvrtFruits[0] === 'Apple') {
  console.log("I really Like Apples.\n");
}
if(fvrtFruits[1] === 'Mango') {
  console.log("I really Like Mangoes.\n");
}
if(fvrtFruits[2] === 'Blueberries') {
  console.log("I really Like Pineapple.\n");
}
if(fvrtFruits[3] === 'Stawberry') {
         console.log("I really Like Stawberry.\n");
}
if(fvrtFruits[4] === 'melon') {
  console.log("I really Like Melon.\n");
}

// Another Method
let fvrt_Fruits = ["Apple", "Mango", "Pineapple", "Stawberry", "Melon"]

console.log(fvrtFruits.includes('Apple'));
// Or
if(fvrt_Fruits.includes('Apple')) {
  console.log("I Really Like Apples.")
}
if(fvrt_Fruits.includes('Mango')) {
  console.log("I Really Like Mangoes.")
}
if(fvrt_Fruits.includes('Stawberry')) {
  console.log("I Really Like Stawbeeries.")
}
if(fvrt_Fruits.includes('Pineapple')) {
  console.log("I Really Like Pineapples.")
}
