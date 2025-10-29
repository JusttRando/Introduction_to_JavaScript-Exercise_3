// TODO: Create an empty array called colors
console.log("--------------------// TODO: Create an empty array called colors--------------------")

let colors =  [];

console.log("                         This is the start of colors array ",colors)

// TODO: Add three colors to the array using push()

console.log("\n--------------------// TODO: Add three colors to the array using push()--------------------")

colors.push("Blue");
colors.push("Red");
colors.push("Green");

console.log("               Added three new colors with push (",colors,")")


// TODO: Create another array called numbers with five numbers
console.log("\n--------------------// TODO: Create another array called numbers with five numbers--------------------")

const numbers = new Array(1,2,3,4,5);

console.log("                      Added five number array with new Array",numbers)

// TODO: Remove the last color from the colors array
console.log("\n--------------------// TODO: Remove the last color from the colors array--------------------")

colors.pop();

console.log("                  I pop pop the last color in the array",colors)

// TODO: Add a new color to the beginning of the colors array
console.log("\n--------------------// TODO: Add a new color to the beginning of the colors array--------------------")

colors.unshift("Pink");

console.log("                       Added new color to the array",colors)

// TODO: Print the length of both arrays
console.log("\n--------------------// TODO: Print the length of both arrays--------------------")

console.log("                       The length of colors array is (",colors.length,")")
console.log("                       The length of numbers array is (",numbers.length,")")