'use strict';

// function calcAge(birth) {
//   const age = 2037 - birth;

//   function printAge() {
//     const output = `You are ${age}, born in ${birth}`;
//     console.log(output);

//     if (birth >= 1981 && birth <= 1996) {
//       const str = `oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(add(2, 3));
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Filip';
// calcAge(1996);

//Hosting with varibles
// console.log(me); // undifined
// console.log(job); // cannot access 'job' before init
// console.log(year); // also but first error is for the job

// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1991;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// //Hosting with functions
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
// Wszystkie produkty zostaną usunięte ponieważ js widzi var jako undefined, a to oznacza że undefined === 0
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);

// const jonas = {
//   name: 'Jonas',
//   year: 1989,
//   calcAge: function () {
//     return 2037 - this.calcAge;
//   },
// };
// jonas.calcAge();

// const calcAgeArrow = birthyear => {
//   console.log('--- arrow ---');
//   console.log(2037 - birthyear);
//   console.log(this);
// };

// const calcAgeExpr = function (birthyear) {
//   console.log('--- Expr ---');
//   console.log(2037 - birthyear);
//   console.log(this);
// };

// function calcAgeDecl(birthyear) {
//   console.log('--- Decl ---');
//   console.log(2037 - birthyear);
//   console.log(this);
// }

// calcAgeArrow(2002);
// calcAgeExpr(2002);
// calcAgeDecl(2002);

// const jonas = {
//   name: 'Jonas',
//   year: 1989,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greetArr: () => console.log(`Hey, ${this.firstName}`),

//   greetDecl: function () {
//     console.log(`Hey, ${this.firstName}`);
//   },
// };

// jonas.calcAge();

//Działa dla deklarowanej funkcji też działa.
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5, 6, 3);

// //nie działa dla funkcji arrow
// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

const marriedJessica = marryPerson(jessica, 'Davis');

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';

// console.log(jessica2);
// console.log(jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before', jessica2);
// console.log('After', jessicaCopy);

// Deep copy/clone

const jessicaClone = structuredClone(jessica2);

jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('oryginal', jessica2);
console.log('clone', jessicaClone);
