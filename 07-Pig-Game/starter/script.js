'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const BtnNewGame = document.querySelector('.btn--new');
const BtnRollDice = document.querySelector('.btn--roll');
const BtnHold = document.querySelector('.btn--hold');
const diceEL = document.querySelector('.dice');
const activePlayer0El = document.querySelector('.player--0');
const activePlayer1El = document.querySelector('.player--1');

let totalScore, activePlayer, dice, currentScore, playing;

const init = () => {
  totalScore = { player0: 0, player1: 0 };
  activePlayer = 0;
  dice = 0;
  currentScore = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceEL.classList.add('hidden');
  activePlayer0El.classList.add('player--active');
  activePlayer1El.classList.remove('player--active');
  activePlayer0El.classList.remove('player--winner');
  activePlayer1El.classList.remove('player--winner');
};

const switchPlayer = () => {
  activePlayer === 0
    ? (current0.textContent = currentScore)
    : (current1.textContent = currentScore);
  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlayer0El.classList.toggle('player--active');
  activePlayer1El.classList.toggle('player--active');
};

const getRandom = () => Math.floor(Math.random() * 6 + 1);

init();

const roundstart = () => {
  if (playing) {
    // generowanie randomowej liczby
    dice = getRandom();

    // pokazywanie kostyki
    diceEL.classList.remove('hidden');

    // Zmiana pozycji kostki
    diceEL.src = `dice-${dice}.png`;

    // Logika punktów i gry

    if (dice !== 1) {
      currentScore += dice;
      activePlayer === 0
        ? (current0.textContent = currentScore)
        : (current1.textContent = currentScore);
    } else {
      currentScore = 0;
      switchPlayer();
    }
  }
};

BtnRollDice.addEventListener('click', roundstart);

BtnHold.addEventListener('click', function () {
  if (currentScore) {
    activePlayer === 0
      ? (totalScore.player0 += currentScore)
      : (totalScore.player1 += currentScore);
    activePlayer === 0
      ? (score0El.textContent = totalScore.player0)
      : (score1El.textContent = totalScore.player1);
    currentScore = 0;
    if (totalScore.player0 >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEL.classList.add('hidden');
      playing = false;
    } else if (totalScore.player1 >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEL.classList.add('hidden');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

BtnNewGame.addEventListener('click', init);
