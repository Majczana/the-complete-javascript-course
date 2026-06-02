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

/*
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
*/
/*
const temperatures1 = [70, -2, -6, -90, "error", 9, 13, 17, 15, 14, 9, 5];

const temperatures2 = [2, -5, -6, -9, "error", 12, 13, 17, 15, 5, -20, 60];

//Ignorowanie błędów pomiarowych
// Znaleźć najniższą i najwyższą wartość
// Odjąć min od max

const mergeArray = (array1, array2) => array1.concat(array2);

const delErrors = (array) => {
  const clearArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] != "number") {
      continue;
    } else {
      clearArray.push(array[i]);
    }
  }
  return clearArray;
};

function calcAmplitude(array1, array2) {
  const cleanArray = delErrors(mergeArray(array1, array2));
  let max = cleanArray[0];
  let min = cleanArray[0];
  for (let i = 0; i < cleanArray.length; i++) {
    if (cleanArray[i] > max) {
      max = cleanArray[i];
    }
    if (cleanArray[i] < min) {
      min = cleanArray[i];
    }
  }
  return [max - min, max, min];
}

console.log(calcAmplitude(temperatures1, temperatures2));
/*

const mesureKelvin = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: "15",
  };

  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(mesureKelvin());
*/
