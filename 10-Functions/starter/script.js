'use strict';

// const bookingList = [];

// const createBooking = (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers,
// ) => {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookingList.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);

// createBooking('LH123', undefined, 2);

// const flight = 'LH234';
// const jonas = {
//   name: 'Filip Majewski',
//   passsport: 24739572345,
// };

// const checkIn = (flightNum, passenger) => {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passsport === 24739572345) {
//     alert('Check in');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight, jonas);

// const newPassport = person => {
//   person.passsport = Math.trunc(Math.random() * 100000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = str => {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = str => {
//   const [firstWord, ...others] = str.split(' ');
//   return [firstWord.toUpperCase(), ...others].join(' ');
// };

// const transformer = (str, fn) => {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// console.log('======================');
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time // common use
// const high5 = () => {
//   console.log('👍');
// };

// document.body.addEventListener('click', high5);

// ['Filip', 'Alicja', 'Błażej', 'Ola'].forEach(high5);

const greet = greeting => {
  return function (name) {
    return function (times) {
      console.log(`${greeting} ${name} ${times}`);
    };
  };
};

const greeterHey = greet('Hey');
const greeterHeyTime = greet('Elo')('Błażej');

greeterHey('Filip');
greet('Hello')('Alicja')('5');
greeterHeyTime('dzisiaj');

const greetArrow = greetingArrow => nameArrow => timesArrow => {
  console.log(`${greetingArrow} ${nameArrow}, ${timesArrow}`);
};

greetArrow('Simano')('Wojtek')('12');
const greetHeyTimeArrow = greetArrow('Siemaneczko')('Marysia');

greetHeyTimeArrow('1525213');

const greetingHeyArrow = greetArrow('no elo');

greetingHeyArrow('Bogdan')('99');
