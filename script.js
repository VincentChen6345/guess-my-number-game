"use strict";

const scoreDigit = document.querySelector(".scoreDigit");
const highScoreDigit = document.querySelector(".highScoreDigit");
const messageDisplay = function (message) {
  document.querySelector(".instructions").textContent = message;
};

//setting a new random number function
let setNumber = Math.trunc(Math.random() * 20 + 1);
//assign set number to question mark;
let secretNumber = (document.querySelector(".number").value = setNumber);

let score = 20;
//set display score= initial score value of 20

let highScore = 0;
//set highscore display= initial value of 0;
highScoreDigit.textContent = highScore;

let playing = true;

//check click function
const check = document
  .querySelector(".check")
  .addEventListener("click", function () {
    if (playing) {
      const guess = Number(document.querySelector(".guess").value);
      console.log(guess, typeof guess);
      //1st case: no input

      if (!guess) {
        messageDisplay("No number... 😢");
      } else if (
        //2nd case: correct input

        guess === secretNumber
      ) {
        messageDisplay(`Correct GUESS! 🔥`);
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector("h1").style.color = "#00ffff";
        document.querySelector(".number").style.width = "23%";

        //SET HIGH SCORE
        if (score > highScore) {
          highScore = score;
          highScoreDigit.textContent = highScore;
        }
      } else if (guess !== secretNumber) {
        //is input > set number?
        guess > secretNumber
          ? messageDisplay("Too HIGH!")
          : messageDisplay("Too LOW!");

        //score -1

        score -= 1;
        scoreDigit.textContent = score;

        if (score === 0) {
          messageDisplay("You LOSE!😱");
          document.querySelector("body").style.backgroundColor = "#eaa9ac";
          playing = false;
        }
      }
    }
  });

//assign again button function
document.querySelector(".button-again").addEventListener("click", function () {
  score = 20;
  scoreDigit.textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  messageDisplay("Start guessing...");
  document.querySelector(".guess").value = "";

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15%";

  playing = true;

  setNumber = Math.trunc(Math.random() * 20 + 1);

  secretNumber = document.querySelector(".number").value = setNumber;
});
