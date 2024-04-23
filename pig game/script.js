"use strict";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Roliing dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generate a dice roll
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll);

  // 2. Display a dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceRoll}.png`;

  // 3. Check for a rolled 1, if true switch to next player
});
