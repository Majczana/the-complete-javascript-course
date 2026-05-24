/*
let js = "Amazing";
if (js === "Amazing") alert("JavaScript jest niesamowity");
console.log(40 + 5 + 40)
*/

/*
let country = "Poland"
const continent = "Europe"
let population = 38000000

console.log(country, continent, population)

const isIsland = false;
let language

console.log(isIsland, population, country, language);

language = "Polish";

console.log(isIsland, population, country, language);
*/
/*
//Dzielimy populację kraju na pół
let population = 11000000;
//population /= 2;
console.log(population);

// Zwiększamy populację kraju o 1
//population++;
console.log(population);

let finlandPopulation = 6000000

if (population > finlandPopulation) console.log("Populacja Polski jest większa niż Finlandi"), console.log(population > finlandPopulation)

avaragePopulation = 33000000
console.log(population < avaragePopulation)
*/

/*
let population = 6000000
const country = "Portugal"
const continent = "Europe"
const language = "portuguese"


const description1 = country +
    " is in " +
    continent +
    ", and its " +
    population +
    " people speak " +
    language

console.log(description1)
*/
/*
const firstname = "Jonas";
const job = "teacher";
const birthYear = "1991";
const year = 2037;

const jonasNew = `I'm ${firstname},\n\ 
a ${year - birthYear} years old \n\ ${job}`

console.log(jonasNew)

const age = 18
const ageToLicence = 18

const yearToLicence = ageToLicence - age

if (age < ageToLicence) {
    console.log(`To licens you need to wait ${yearToLicence} years`);
}
else {
    console.log(`You are ${age} years old, you can make a driver license`)
}

*/

/*
age = Number(prompt("What is your age?s"))
console.log(age)

if (age) {
    console.log("Wiek jest zdefiniowany");
} else {
    console.log("Wiek nie jest zdefiniowany");
}

if (age === 18) console.log("Wszystko wskazuje że jesteś pełnoletni");

console.log(age)
*/

/* Write your code below. Good luck! 🙂 */

function whoWins(scoreDolphins, scoreKoalas) {
    if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
        console.log("Dolphins win the trophy");
    } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
        console.log("Koalas win the trophy");
    } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
        console.log("Both win the trophy")
    } else {
        console.log("No one wins")
    }
}

console.log(`First data`)
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
whoWins(scoreDolphins, scoreKoalas)
console.log("");

console.log(`second data`)
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;
whoWins(scoreDolphins, scoreKoalas)
console.log("");

console.log(`third data`)
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;
whoWins(scoreDolphins, scoreKoalas)


