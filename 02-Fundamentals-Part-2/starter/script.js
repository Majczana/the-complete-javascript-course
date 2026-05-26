"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriverLicense) console.log("I can drive")

*/

/*
function logger() {
    console.log("My name is Filip")
}


logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)
*/
// Function declaration
/*
function calcAge1(birthYear) {
    return 2037 - birthYear;

}
// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
console.log(calcAge1(2002), calcAge2(2002));
*/

//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(2002));

const lataDoEmerytury = (birthYear, name) => {
    const age = 2037 - birthYear;
    const emerytura = 65 - age;
    return `${name} ma do emerytury ${emerytura} lat`
}

console.log(lataDoEmerytury(2002, "Filip"))
console.log(lataDoEmerytury(1996, "Gabrysia")) 