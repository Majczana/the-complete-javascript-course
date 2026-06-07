"use strict";
/*
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 15;

*/
const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

const maxNumber = 20;
let secretNumber = Math.trunc(Math.random() * maxNumber) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    displayMessage("No number!");
    // When players win
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");

    document.querySelector(".number").style.background =
      "linear-gradient(145deg, #0dca45, #f2e1a8)";

    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) highScore = score;

    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".message").style.color = "#0df30d";
    // When players guess wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage(
        guess > secretNumber
          ? "The number is lower ⬇️"
          : "The number is higher ⬆️",
      );
    } else {
      displayMessage("You lost :(");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing again...");
  document.querySelector(".number").style.background =
    "linear-gradient(145deg, #ffffff, #cfd4ff)";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").style.color = "";
});
