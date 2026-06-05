"use strict";
/*
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 15;

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
    // When players win
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";

    document.querySelector(".number").style.background =
      "linear-gradient(145deg, #0dca45, #f2e1a8)";

    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) highScore = score;

    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".message").style.color = "#0df30d";
    // When players guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "The number is lower ⬇️";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost ;(";
      document.querySelector(".score").textContent = 0;
    }
    // When players guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "The number is higher ⬆️";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost ;(";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.background =
    "linear-gradient(145deg, #ffffff, #cfd4ff)";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").style.color = "";
});
