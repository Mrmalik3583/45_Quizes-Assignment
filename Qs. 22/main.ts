
// Question 22
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//  console.log("\tQuestion 22:\n");

function makeJuices(name: string, color: string, taste: string) {
        return {
            name,
            color,
            taste
        };
}

//  Juices name, taste, color
const Juices = [
    makeJuices("Mango Juice", "Yellow", "Sweet"),
    makeJuices("Chocolate Shake", "Chocolate", "Sweet"),
    makeJuices("Stawbeery Juice", "Pink", "Sweet"),
]

const InvalidIndex = 10;
console.log("Juices At the Different Index:", Juices[InvalidIndex], "\n");
// print the Juices names

Juices.forEach((Juices) => {
    console.log(`Name: ${Juices.name}, Color: ${Juices.color}, Taste: ${Juices.taste}`);
});