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
/*
const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(2002));

const lataDoEmerytury = (birthYear, name) => {
    const age = 2037 - birthYear;
    const emerytura = 65 - age;
    return `${name} ma do emerytury ${emerytura} lat`
}

console.log(lataDoEmerytury(2002, "Filip"))
console.log(lataDoEmerytury(1996, "Gabrysia"))
*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(5, 3))
*/
// Przepisze te funkcję do array
/*
const cutFruitPieces = fruit => fruit * 4


const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const Juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;

    return Juice
}

console.log(fruitProcessor(4, 3))
*/
/*
const cutFruitPieces = fruit => fruit * 4;

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(4, 3));
*/
/*
const calcAge = birthYear => 2037 - birthYear;

const calcEmerytura = age => 65 - age;

function lataDoEmerytury(birthYear, name) {
    const age = calcAge(birthYear);
    const emerytura = calcEmerytura(age);

    return emerytura > 0 ? emerytura : -1 //ternery
    /*
    if (emerytura > 0) {
        return emerytura
    }

    return -1


}

console.log(lataDoEmerytury(1960, "Filip"))
console.log(lataDoEmerytury(2002, "Filip"))

    */

/* Challange #1 */

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}

checkWinner(scoreDolphins, scoreKoalas);

*/
/*
const friends = ["Blazej", "Kiniu", "Ola", "Ala"]; // Domyślny sposób

console.log(friends);
// const years = new Array(100, 200, 300) // stary sposób
console.log(friends[1])
console.log(friends.length);
console.log(friends[friends.length - 1]);


friends[2] = "Szitsu"
console.log(friends);

// friends = ["Bob", "Marley"] // jak jest const to nie możemy zmieniać całej tablicy, ale możemy ją edytować tak jak wyżej.

const firstName = "Jonas";
const Jonas = [firstName, "Schmedtmann", 1505 - 5, "Teacher", friends];

console.log(Jonas)

// Zadanie
*/
/*
const calcAge = birthYear => 2037 - birthYear;

const years = [1990, 1967, 2000, 2012, 2018];

const age1 = (calcAge(years[0]));
const age2 = (calcAge(years[1]));
const age3 = (calcAge(years[years.length - 1]));

const ages = [age1, age2, age3]
console.log(ages)
*/
/*
const friends = ["Blazej", "Kiniu", "Ola", "Ala"];

// Dodawanie elementów do tablicy

friends.push("Szits"); // dodaj na końcu
friends.unshift("Kuba") // dodaj na początku
console.log(friends);

// Odejmowanie elementów z tablicy

friends.pop(); // usuwanie ostatniej
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift() // Usuwanie pierwszej
console.log(friends);


console.log(friends.indexOf("Blazej"))

console.log(friends.includes("Ola"))

const guest = "Kiniu"

const onList = friends.includes(guest) ? `${guest} are on list` : `${guest} are not on the list`;

console.log(onList)
*/

// Zadanie 
/* Write your code below. Good luck! 🙂 */

// const bills = [125, 555, 44];
// const tips = [];

/*
function calcTip (bill) {`
    if (bill >= 50 && bill <= 300){
        return bill * 0.15;
    }else {
        return bill * 0.20;
    }
}
*/
/*
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const sumTotalBill = billNumber => calcTip(bills[billNumber]) + bills[billNumber] ;

tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));
console.log(tips);

const totals = [];
totals.push(sumTotalBill(0));
totals.push(sumTotalBill(1));
totals.push(sumTotalBill(2));
console.log(totals);

*/

// const filip = {
//     firstName: "Filip",
//     lastName: "Majewski",
//     age: 2026 - 2002,
//     birthYear: 2002,
//     friends: ["Blazej", "Kiniu", "Ola", "Ala"],
// }; // literal syntax
/*
console.log(filip.firstName)
console.log(filip["lastName"])

const nameKey = "Name"
console.log(filip["first" + nameKey])
console.log(filip["last" + nameKey])

const property = "elo";

filip[property] ? console.log(filip[property]) : console.log("Brak danych");

filip.location = "Poland";
filip["city"] = "Warta";

console.log(filip);
*/

// Challange
//console.log(`${filip["firstName"]} has ${filip.friends.length}, and his best friend is called ${filip.friends[3]}`);
/*
const ala = {
    firstName: "Alicja",
    lastName: "Patora",
    birthYear: 2002,
    job: "Influencer",
    friends: ["Filip", "Ola", "Błażej"],
    hasDriverLicense: true,

    calcAge: function(birthYear){
        return 2026 - birthYear;
    }
}

console.log(ala.calcAge(ala.birthYear))
*/
/*
const ala = {
    firstName: "Alicja",
    lastName: "Patora",
    birthYear: 2002,
    job: "Influencer",
    friends: ["Filip", "Ola", "Błażej"],
    hasDriverLicense: true,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she ${this.hasDriverLicense ? "has driver license🟢" : "doesn't have a driver's license🔴"}`
    }
    /*
    calcAge: function() {
        return 2026 - this.birthYear; // this. odwołuje się do elementu w jakim jesteśmy. Czyli coś może się odnosić do obiektu w jakim jest.
    }
*/

// console.log(ala.calcAge());
// console.log(ala.age);
//console.log(ala.getSummary())




/* Write your code below. Good luck! 🙂 */
/*
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    
    calcBMI: function(){
        this.bmi = (this.mass / (this.height * this.height))
        return this.bmi
    },
    
    summaryBMI: function(){
        return `${this.fullName} BMI (${this.bmi}) is higher than ${john.fullName} (${john.bmi})!`
    }
    
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = (this.mass / (this.height * this.height));
        return this.bmi;
    },
    summaryBMI: function(){
        return `${this.fullName} BMI (${this.bmi}) is higher than ${mark.fullName} (${mark.bmi})!`;
    }
}

mark.calcBMI() > john.calcBMI() ? console.log(mark.summaryBMI()) : console.log(john.summaryBMI());
*/

//Loops, for, while
/*
 for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`)
}
let rep = 0
*/

/*
const jonas = [
    "Jonas", 
    "Schmedtmann", 
    1505 - 5, 
    "Teacher", 
    ["Michael", "Peter", "Steven"]
];

const types = [];

for (let i = 0; i < jonas.length ; i++){
    console.log(jonas[i]);

    types.push(typeof jonas[i]);
//  types[i] = typesof jonas[i];
}
console.log(types);

*/

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

//continue and brake

const jonas = [
    "Jonas",
    12,
    "Schmedtmann", 
    2037 - 2002, 
    "Teacher", 
    ["Michael", "Peter", "Steven"]
];

const types = [];
console.log("--- CONTINUE ---")
for (let i = 0; i < jonas.length ; i++){
    if(typeof jonas[i] !== "string") continue;

    types.push(typeof jonas[i]);
    console.log(jonas[i])
//  types[i] = typesof jonas[i];
}

console.log("--- BREAK ---")
for (let i = 0; i < jonas.length ; i++){
    if(typeof jonas[i] === "number") break;  

    types.push(typeof jonas[i]);
    console.log(jonas[i])
//  types[i] = typesof jonas[i];
}