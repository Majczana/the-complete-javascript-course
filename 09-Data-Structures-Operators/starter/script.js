'use strict';

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Desctructuring
// const [x, y, z] = arr;

// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Recive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [one, two, [three, four]] = nested;
// console.log(one, two, three, four);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// const [, , thirdBook] = books;

// console.log(thirdBook);
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;

// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// const [firstBook, secondBook] = books;

// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [, [rating, ratingCount]] = ratings;

// console.log(rating, ratingCount);

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Data needed for a later exercise

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const weekdays = ['pon', 'wt', 'śr', 'czw', 'pią', 'sob', 'nied'];

const openingHours = {
  mon: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Zamówienie przyjęte! ${this.starterMenu[starterIndex]} i ${this.mainMenu[mainIndex]} zostaną dostarczone do ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicius pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  //ES6 enha
  openingHours,
};

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// const keys = Object.keys(openingHours);
// const values = Object.values(openingHours);
// const entries = Object.entries(openingHours);

// for (const i of keys) {
//   console.log(i);
// }
// for (const i of values) {
//   console.log(i);
// }
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// // console.log(restaurant.openingHours.mon?.open.here.elo.elo);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// // Methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

// // Array

// const users = [
//   {
//     name: 'Jonas',
//     email: 'jonas@gmail.com',
//     phone: '573567643',
//   },
// ];
// console.log(users[0]?.name ?? 'There is no user with this name');
// console.log(users[1]?.name ?? 'There is no user with this name');

// //Example

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // Loop for of
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// restaurant.numGuests = 0;
// const guest = restaurant.numGuests ?? 10;

// console.log(guest);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La pizza',
//   owner: 'Giovanni Rossi',
// };

// // Or assigment operator

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 'Brak';
// // Nulish (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 'brak';

// console.log(rest1.numGuests);
// console.log(rest2.numGuests);

// // AND assignment operator

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest2.owner);

// Use Any data types, return any data type, short-circuting
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null

// // restaurant.numGuests = 14;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guest1);
// const guest2 = restaurant.numGuests ?? 12;

// console.log(guest2);

// console.log(0 && 'jonas');
// console.log('jonas' && 0);
// console.log('jonas' && 5 && 2 && null && undefined && 5);

// // practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// restaurant.orderPizza('grzyby', 'cebula', 'oliwa', 'szpinak');
// restaurant.orderPizza('ser');

// const arr = [1, 2, ...[3.4]];

// // REST, because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [Pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(Pizza, risotto, otherFood);

// /// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(2, 5, 2, 1, 7, 5, 4, 3, 5, 4, 3);

// const x = [23, 5, 7];
// add(...x);
// const ingredients = ['grzyby', 'ser', 'pomidor'];
// restaurant.orderPasta(...ingredients);

// const newRestaurant = { fundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

// console.log(newRestaurant);

// const copyRestaurant = { ...restaurant };

// copyRestaurant.name = 'Ristorante Roma';
// console.log(copyRestaurant);
// console.log(restaurant);

// Objects

// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// newMenu.push('makarone');
// console.log(newMenu);

// // copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// console.log(mainMenuCopy);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const joinArr = [...arr1, ...arr2];
// console.log(joinArr);

// // Iterables: arrays, strings, mas, sets. NOT OBJECTS

// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(...str);
// console.log(` --- ${letters}  ---`);

// restaurant.orderDelivery({
//   address: 'Henryka Sienkiewicza 73',
//   starterIndex: 1,
// });

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// // Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested object
// const {
//   fri: { open: o, close: c },
// } = openingHours;

// console.log(o, c);
/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// //zadanie 1
// const [players1, players2] = game.players;

// console.log(game.players);
// //zadanie2
// const [gk, ...fieldPlayers] = players1;

// console.log(gk, fieldPlayers);
// //zadanie3

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //zadanie 4The team with the lower odd is more likely to win. Print to the console which

// const playerFinals = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playerFinals);
// //Zadanie5
// console.log(game);
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //zadanie6
// const printGoals = (...players) => {
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);``
//   }
//   console.log(players.length);
// };
// printGoals(...game.scored);

// //zadanie7

// team1 < team2 && console.log(game.team1);
// team2 < team1 && console.log(game.team2);

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// let sum = 0;
// for (const i of Object.values(game.odds)) {
//   sum += i;
// }
// console.log(sum / Object.values(game.odds).length);

// for (const [team, average] of Object.entries(game.odds)) {
//   game[team]
//     ? console.log(`Odd of victory ${game[team]}: ${average}`)
//     : console.log(`Odd of draw: ${average}`);
// }
// console.log('--------------------------------');
// const scorers = {};

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// // Methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

// // Array

// const users = [
//   {
//     name: 'Jonas',
//     email: 'jonas@gmail.com',
//     phone: '573567643',
//   },
// ];
// console.log(users[0]?.name ?? 'There is no user with this name');
// console.log(users[1]?.name ?? 'There is no user with this name');

// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'rissoto',
//   'pasta',
//   'pizza',
// ]);

// console.log(orderSet);
// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('rissoto');
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// // Example

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

// const staffSet = [...new Set(staff)];
// console.log(staffSet);
// console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']));

// console.log(new Set('filipmajewski').size); // unique
// console.log('filipmajewski'.length); // all

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log(commonFoods);
// console.log(`Intersections`, commonFoods);
// console.log(...[commonFoods]);

// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log(italianFoods);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log(uniqueItalianFoods);

// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log(uniqueMexicanFoods);

// const uniqueItalianAndMexicanFoods =
//   italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :)')
//   .set(false, 'We are close :(');

// console.log(rest.get('categories'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// // Czy restauracja jest otwarta ?
// // Mało czytelne
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // console.log(rest.size);
// // rest.clear();
// const arr = [1, 2];
// console.log(rest.size);
// rest.set(arr, 'Test');
// console.log(rest.get(arr));
// rest.set(document.querySelector('h1', 'Heading'));
// console.log(rest);

// const question = new Map([
//   ['question', 'What is the best programing language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Python'],
//   [4, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again!'],
// ]);

// // console.log(question);
// // console.log(openingHours);
// // const openingHoursMap = new Map(Object.entries(openingHours));
// // console.log(openingHoursMap);
// // Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = 3;
// answer === question.get('correct')
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

// console.log(question.get(answer === question.get('correct')));

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2
gameEvents.delete(64);
console.log(gameEvents);
// 3
// const time = [...gameEvents.keys()].pop(); // Trik
const eventsAverage = 90 / gameEvents.size;
console.log(`An event happened, on avarage, every ${eventsAverage} minutes `);

// 4
for (const [time, event] of gameEvents) {
  const half = time <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${time}: ${event}`);
}
