// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = 23;
const name = "Filip";
if (x === 23) {
  console.log(23);
}

const calcAge = (birthYear) => console.log(elo);

console.log(x);

console.log();
*/

// console.log(100 - 50);
// console.log("siemano kolano");

// Osobna funkcja na odwracanie danych
const revString = (value) => {
  let i = 1;
  const letter = [];
  while (i <= value.length) {
    letter.push(value[value.length - i]);
    i++;
  }
  return letter;
};
function reverse(value) {
  //sprawdzamy czy wartość jest prawidłowa
  if (
    typeof value != "string" &&
    typeof value != "number" &&
    typeof value != "object"
  ) {
    return null;
  }
  if (typeof value === "string") {
    return revString(value).join("");
  }
  if (typeof value === "number") {
    value = revString(String(value)).join("");
    return Number(value);
  }
  if (typeof value === "object") {
    return revString(value);
  }
}

console.log(reverse("Super"));

console.log(reverse(["k", "o", "t"]));

console.log(reverse(12) - reverse(11));

console.log(reverse(6));

console.log();
