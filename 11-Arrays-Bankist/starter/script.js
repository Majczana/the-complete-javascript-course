'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const sumIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const sumOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${sumIn}€`;
  labelSumOut.textContent = `${Math.abs(sumOut)}€`;

  const sumIntrest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, sum) => acc + sum, 0);

  labelSumInterest.textContent = `${sumIntrest}€`;
};

const usernameCreator = accounts => {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .split(' ')
      .map(name => name[0])
      .join('')
      .toLowerCase();
  });
};

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const updateUI = acc => {
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event handler

let currentAccount;

const lastLargeMovement = acc => {
  const movements = acc.movements;
  if (movements && movements.length > 0) {
    const lastLargeIndex = movements.findLastIndex(mov => mov > 2000);

    if (lastLargeIndex !== -1) {
      const movementAgo = movements.length - lastLargeIndex;
      console.log(
        `Your latest large movement was ${movementAgo} movements ago.`,
      );
    } else {
      console.log('You dont have last large movement');
    }
  }
};

btnLogin.addEventListener('click', function (e) {
  usernameCreator(accounts);
  // prevent form from submiting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;

    // Display movements
    containerApp.style.opacity = 1;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
    lastLargeMovement(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
    inputTransferAmount.value = inputTransferTo.value = '';
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    inputClosePin.value = inputCloseUsername.value = '';
    updateUI(currentAccount);
    console.log('Delete');

    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    console.log(index);

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

console.log(movements);

const groupeMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals',
);
console.log(groupeMovements);

// console.log(movements);
// const lastwithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastwithdrawal);

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsernames(accounts);
// console.log(accounts);

// const user = 'Steven Thomas Williams'; //stw
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');
// console.log(
//   accounts.map(function (acc) {
//     console.log(acc);
//   }),
// );

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// // map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// set

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// console.log(account1);

// PIPELINE
// const eurToUsd = 1.1;
// const totalDeposidUSD = movements
//   // .filter(mov => mov < 0)
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDeposidUSD);

// // accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`iteretion ${i}: ${acc} + ${cur}`);
//   return acc + cur;
// }, 0);

// let acc = 0;
// for (const mov of movements) acc += mov;

// // Maximum value
// const balanceMax = movements.reduce((acc, cur) => {
//   if (cur > acc) acc = cur;
//   return acc;
// }, movements[0]);

// console.log(balanceMax);

// console.log(acc);
// // const deposits = movements.filter(function (mov) {
// //   return mov > 0;
// // });

// const deposits = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposits);

// const depositsNew = [];
// for (const mov of movements) if (mov > 0) depositsNew.push(mov);

// console.log(depositsNew);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// // return mov * eurToUsd;

// console.log(movements);
// console.log(movementsUSD);

// const newArrayMovement = [];
// for (const mov of movements) {
//   newArrayMovement.push(mov * eurToUsd);
// }
// console.log(newArrayMovement);

// const movementsDescriptions = movements.map(
//   (mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'}`,
// );

// console.log(movementsDescriptions);
/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE
// console.log('---slice---');
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);
// console.log(arr);

// // SPLICE
// console.log('---splice---');
// // arr.splice(2);
// // arr.splice(-1);
// arr.splice(1, 2);

// console.log(arr);

// //REVERSE
// console.log('---reverse---');
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);

// console.log(letters);

// // JOIN
// console.log(letters.join('-'));
// console.log(letters.join(' ')); // a b c d e f g h i j
// console.log(letters.join('')); // abcdefghij

// const arr = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(0));

// // Getting the last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, money] of movements.entries()) {
//   const status = money > 0 ? 'deposited' : 'withdrew';
//   console.log(
//     `Transaction number: ${i + 1} \n You ${status}: ${Math.abs(money)}`,
//   );
// }

// console.log('------------FOREACH--------------');

// movements.forEach(function (money, i, arr) {
//   const status = money > 0 ? 'deposited' : 'withdrew';
//   console.log(
//     `Transaction number: ${i + 1} \n You ${status}: ${Math.abs(money)}`,
//   );
// });

// // Break cannot be done for foreach loop.

// // 0: function(200)
// // 1: function(450)
// // 2: function(400)

/*
Working With Arrays

Coding Challenge #1

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.

Your tasks:

Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

Hints: Use tools from all lectures in this section so far 😉
*/

// const data1 = [
//   [3, 5, 2, 12, 7],
//   [4, 1, 15, 8, 3],
// ];
// const data2 = [
//   [9, 16, 6, 8, 3],
//   [10, 5, 6, 1, 4],
// ];

// function checkDogs(dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice(1, -2);

//   const allDogs = dogsJuliaCorrected.concat(dogsKate);

//   const isAdult = age => age >= 3;

//   allDogs.forEach(function (age, i) {
//     console.log(
//       isAdult(age)
//         ? `Dog number ${i + 1} is an adult, and is ${age} years old`
//         : `Dog number ${i + 1} is still a puppy 🐶`,
//     );
//   });
// }
// console.log('----- zestaw 1 -----');
// checkDogs(...data1);
// console.log('----- zestaw 2 -----');
// checkDogs(...data2);

// function checkDogs(allDogs) {
//   allDogs.forEach(function (age, number) {
//     if (isAdult(age)) {
//       console.log(
//         `Dog number ${number + 1} is an adult, and is ${age} years old`,
//       );
//     } else {
//       console.log(`Dog number ${number + 1} is still a puppy 🐶`);
//     }
//   });
// }

// function checkDogs(allDogs) {
//   allDogs.forEach(function (age, i) {
//     if (isAdult(age))
//       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
//     if (!isAdult(age)) console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//   });
// }

/*

Coding Challenge #2

Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)

4. Run the function for both test datasets

Test data:

§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK �

// */

// const dogAges = [16, 2, 4, 1, 15, 8, 3];

// // Challange #3

// const calcAvarageHumanAge = ages => {
//   return ages
//     .map(age => {
//       if (age <= 2) return 2 * age;
//       if (age > 2) return 16 + age * 4;
//     })
//     .filter(age => age > 18)
//     .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
// };

// const humanAgesFromDogs = calcAvarageHumanAge(dogAges);

// console.log(humanAgesFromDogs);

// // const dogAges = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function (dogAges) {
//   return dogAges.map(dogAge => {
//     if (dogAge <= 2) return 2 * dogAge;
//     if (dogAge > 2) return 16 + dogAge * 4;
//   });
// };

// const humanAge = calcAverageHumanAge(dogAges);
// console.log(humanAge);

// const humanAgeAdult = function (humanAge) {
//   return humanAge.filter(age => age >= 18);
// };

// console.log(humanAgeAdult(humanAge));

// const humanAgeAVG = function (humanAge) {
//   return humanAge.reduce((acc, curr, i, arr) => {
//     return acc + curr / arr.length;
//   }, 0);
// };

// console.log(humanAgeAVG(humanAge));

// console.log(humanAgeAVG(humanAgeAdult(humanAge)));

// const avarage = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const firstWithDrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithDrawal)

// console.log(accounts)

// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account)

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') console.log(acc.owner);
// }
// console.log(movements);
// console.log(movements.includes(-130));
// console.log(movements.some(mov => mov > 0));

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements);
// console.log(account4.movements.every(mov => mov > 0));

// //separate callbacks

// const deposite = mov => mov > 0;

// console.log(movements.some(deposite));
// console.log(movements.every(deposite));
// console.log(account4.movements.every(deposite));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// console.log(arrDeep.flat(2));

// console.log(accounts);

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// const ownersOfDogsEatingToMuch = [];
// const ownersOfDogsEatingToLittle = [];
// const dogsEatingOkay = [];

// dogs.forEach(dog => {
//   const recommendedFood = dog.weight ** 0.75 * 28;
//   dog.curFood = dog.curFood;
//   dog.recFood = recommendedFood;

//   const margines = (10 / 100) * Math.abs(dog.recFood);
//   const minFood = dog.recFood - margines;
//   const maxFood = dog.recFood + margines;

//   if (dog.curFood > maxFood) {
//     ownersOfDogsEatingToMuch.push(dog.owners);
//   }
//   if (dog.curFood < minFood) {
//     ownersOfDogsEatingToLittle.push(dog.owners);
//   }
//   dog.curFood === dog.recFood ? console.log(true) : console.log(false);

//   if (dog.curFood >= minFood && dog.curFood <= maxFood) {
//     console.log(true);
//     dogsEatingOkay.push(dog);
//   } else {
//     console.log(false);
//   }
// });

// // const dogsCopy = dogs.reduce(dogs);

// console.log(dogsEatingOkay);
// console.log(ownersOfDogsEatingToMuch.flat());
// console.log(ownersOfDogsEatingToLittle.flat());

// const isSarahDogsEatGood = function (dogsArray) {
//   const sarahDogs = dogsArray.find(dog => dog.owners.includes('Sarah'));
//   if (sarahDogs.curFood > sarahDogs.recFood) {
//     console.log('Sarah dog eat to much');
//   } else {
//     console.log('Sarah dog eat to low');
//   }
// };

// isSarahDogsEatGood(dogs);
// const dogCopy = dogs.slice();
// dogCopy.sort((dog1, dog2) => dog1.recFood - dog2.recFood);
// console.log(dogs);
// console.log(dogCopy);

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 24,
//     activities: ['digging', 'sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 22,
//     activities: ['agility', 'swimming', 'fetch'],
//   },
//   {
//     breed: 'Border Collie',
//     averageWeight: 20,
//     activities: ['agility', 'running', 'fetch'],
//   },
//   {
//     breed: 'Chihuahua',
//     averageWeight: 3,
//     activities: ['digging', 'running'],
//   },
//   {
//     breed: 'Great Dane',
//     averageWeight: 65,
//     activities: ['sleeping', 'fetch'],
//   },
// ];

// const huskyWeight = breeds.find(dog => dog.breed === 'Husky').averageWeight;
// console.log(huskyWeight);

// const dogBothActivites = breeds.find(
//   breed =>
//     breed.activities.includes('fetch') && breed.activities.includes('running'),
// ).breed;
// console.log(dogBothActivites);

// const allActivites = breeds.flatMap(breed => breed.activities);
// console.log(allActivites);

// // breeds.forEach(breed => {
// //   allActivites.push(breed.activities);
// // });
// // console.log(allActivites.flat());

// const uniqueActivites = [...new Set(allActivites.flat())];
// console.log(uniqueActivites);

// const swimingAdjacent = [
//   ...new Set(
//     breeds
//       .filter(breed => breed.activities.includes('swimming'))
//       .flatMap(breed => breed.activities)
//       .filter(activity => activity !== 'swimming'),
//   ),
// ];

// console.log(swimingAdjacent);

// const isAllWeightAvarage = breeds.every(breed => breed.averageWeight >= 10);
// console.log(isAllWeightAvarage);

// const isActiveBreed = breeds.some(breed => breed.activities.length >= 3);
// console.log(isActiveBreed);

// console.log(breeds[4].activities.length);

// const maxWeight = Math.max(
//   ...breeds
//     .filter(breed => breed.activities.includes('fetch'))
//     .map(breed => breed.averageWeight),
// );

// const heaviestBreed = breeds
//   .filter(breed => breed.activities.includes('fetch'))
//   .find(breed => breed.averageWeight === maxWeight);

// console.log(maxWeight);
// console.log(heaviestBreed.averageWeight);

// string
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// // Numbers
// const numbers = [1, 4, 6, 7, 8, 4, 3, 1, 4, 6, -1, -5, -7, -4, -1, 0];
// console.log(numbers.sort((a, b) => a - b));
// console.log(movements.sort((a, b) => a - b));
