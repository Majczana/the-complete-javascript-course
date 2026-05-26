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

/*
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
*/

/*

const dzien = "Niedzi"

switch (dzien) {
    case "Poniedziałek":
        console.log("Struktura kursu");
        console.log("Iść na meetup kodowania");
        break;
    case "Wtorek":
        console.log("Przygotować materiały do nauki")
        break;
    case "Środa":
        console.log("Zacząć się uczyć");
        break;
    case "Czwartek":
        console.log("Podsumować wiedzę i zrobić powtórke");
        break;
    case "Piątek":
        console.log("Przyjść na egzamin i zaliczyć");
        break;
    case "Sobota":
    case "Niedziela":
        console.log("A w weekend odpoczywam!")
        break;
    default:
        console.log("Nieprawidłowa data")
}

if (dzien === "Poniedziałek") {
    console.log("Struktura kursu");
    console.log("Iść na meetup kodowania");
} else if (dzien === "Wtorek") {
    console.log("Przygotować materiały do nauki")
} else if (dzien === "Środa") {
    console.log("Zacząć się uczyć");
} else if (dzien === "Czwartek") {
    console.log("Podsumować wiedzę i zrobić powtórke");
} else if (dzien === "Piątek") {
    console.log("Przyjść na egzamin i zaliczyć");
} else if (dzien === "Sobota" || dzien === "Niedziela") {
    console.log("A w weekend odpoczywam!");
} else {
    console.log("Nieprawidłowa data");
}

*/

// if (age === 24) console.log("Wow masz 24 lata")


/*
const age = 23;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "🍷" : "🥛";
console.log(drink)

console.log(`I like to drink ${age >= 18 ? "🍷" : "🥛"}`)
console.log(drink)
*/

const bill = 430;

/* Write your code below. Good luck! 🙂 */

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`)