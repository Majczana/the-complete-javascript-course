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

// const greet = greeting => {
//   return function (name) {
//     return function (times) {
//       console.log(`${greeting} ${name} ${times}`);
//     };
//   };
// };

// const greeterHey = greet('Hey');
// const greeterHeyTime = greet('Elo')('Błażej');

// greeterHey('Filip');
// greet('Hello')('Alicja')('5');
// greeterHeyTime('dzisiaj');

// const greetArrow = greetingArrow => nameArrow => timesArrow => {
//   console.log(`${greetingArrow} ${nameArrow}, ${timesArrow}`);
// };

// greetArrow('Simano')('Wojtek')('12');
// const greetHeyTimeArrow = greetArrow('Siemaneczko')('Marysia');

// greetHeyTimeArrow('1525213');

// const greetingHeyArrow = greetArrow('no elo');

// greetingHeyArrow('Bogdan')('99');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
//     );
//     this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
//     console.log(this.booking);
//   },
// };

// lufthansa.book(239, 'Filip Majewski');
// lufthansa.book(365, 'Alicja Patora');

// const book = lufthansa.book;

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   booking: [],
// };

// // Tak to nie działa
// // book(23, 'Marcin Ząbkowski');

// book.call(eurowings, 23, 'Marcin Ząbkowski');
// console.log(eurowings);

// book.call(lufthansa, 12, 'Maciej Szcześniak');
// book.call(eurowings, 15, 'Wojtek Maliński');
// book.call(eurowings, 53, 'Roman Bartnicki');

// const flightData = [583, 'George Cooper'];
// // book.apply(eurowings, flightData);
// // console.log(eurowings);

// // book.apply(lufthansa, flightData);
// // console.log(lufthansa);

// book.call(eurowings, ...flightData); // call w tym przypadku robi to samo co apply. Tylko apply w modern js nikt nie używa. Call z '...' jest czytelniejszy.
// console.log(eurowings);

// // Bind method
// // book.call(eurowings, 23, 'Marcin Ząbkowski');
// console.log('---------Bind method---------');
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW(23, 'Steven Williams');
// bookLH(45, 'Alicja Patora');

// const bookEW23 = book.bind(eurowings, 23);

// bookEW23('Piotr Kanapka');
// bookEW23('Gabriel Drzazga');

// console.log('--------With Event Listeners--------');
// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);
// // const addVat = value => value + value * 0.23;

// console.log(addVat(50));
// console.log(addVat(100));
// console.log(addVat(111));

// const addTax = rate => {
//   return value => {
//     return value + value * rate;
//   };
// };

// const addVat = addTax(0.23);
// const addPit = addTax(0.12);

// console.log(addVat(500));
// console.log(addPit(500));

// Coding Challenge #2

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const userAnswer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}`),
//     );
//     if (userAnswer >= 0 && userAnswer <= 3) {
//       this.answers[userAnswer]++;
//       this.displayResults();
//     } else {
//       console.log('Wybór spoza zakresu');
//     }
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     }
//     if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const testDataPoll = [1, 5, 2, 0];
// const testDataPoll2 = [0, 1, 5, 2];

// poll.displayResults.call({ answers: testDataPoll2 });
// poll.displayResults.call({ answers: testDataPoll2 }, 'string');

// poll.displayResults.call({ answers: testDataPoll });
// poll.displayResults.call({ answers: testDataPoll }, 'string');

// const runOnce = () => {
//   console.log('this will never run again');
// };
// runOnce();

// // IIFE
// (function () {
//   console.log('this will never run again');
//   const isPrivate = 23;
// })();
// // console.log(isPrivate);
// (() => console.log('this will never run again'))();

// {
//   const isPrivate = 23;
// }

// // console.log(isPrivate); //Nei działa

// const secureBooking = () => {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(passengerCount);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// // g();
// // f();

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// h();
// f();
// console.dir(f);

// const boardPassengers = (n, wait) => {
//   const perGroup = n / 3;

//   console.log(`Will start boarding in ${wait} seconds`);

//   setTimeout(() => {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
// };

// boardPassengers(180, 5);

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   const body = document.querySelector('body');
//   body.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

// function a() {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   const body = document.querySelector('body');
//   body.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// }

// a();
