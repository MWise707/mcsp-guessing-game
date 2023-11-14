"use strict";
/*
✅ Feature 1: Guess once.
✅ Feature 2: Guess again!
✅ Feature 3: How many tries?
✅  Feature 4: History in the making
✅ Feature 5: Guess who?
✅ Feature 6: Play again
✅ Feature 7: Guess Star

*/

var userScores = {};

var startGuessingGame = function () {
  var secretNum = Math.trunc(Math.random() * 10);
  // console.log(secretNum); // Remove before deploying game
  var userName = prompt("What is your name?");
  var guess;
  var numberOfTries = 1;
  var guessHistory = [];
  var playAgain;
  do {
    guess = parseInt(prompt(`👍${userName} ⁉️Guess a number between 0 & 10`));
    guessHistory.push(guess);
    if (guess < secretNum) {
      alert(`Sorry ${userName} You guessed too low 🥺`);
      alert(`Guess again ${userName}? 😉`);
      numberOfTries++;
    } else if (guess > secretNum) {
      alert(`Sorry ${userName} You guessed too high`);
      alert(`Guess again ${userName}? 😉`);
      numberOfTries++;
    } else {
      alert(
        `🏆Great Job ${userName}!! ${secretNum} is Correct! Here are all your guesses ${guessHistory.join(
          ", "
        )}!`
      );
      // if new userName
      // add userName to scores obj with number of tries as value
      // else compare current numberOfTries to previous
      //if current is less then let user know they beat their previous attempt
      if (userScores[userName] === undefined) {
        userScores[userName] = numberOfTries;
      } else if (numberOfTries < userScores[userName]) {
        alert(
          `${userName} you beat your previous best attempt by ${
            userScores[userName] - numberOfTries
          }!`
        );
        userScores[userName] = numberOfTries;
      }
    }
  } while (guess !== secretNum);
  console.log(userScores);
  playAgain = prompt(`${userName} would you like to play again?\nTYPE y or n`);
  if (playAgain === "y") {
    startGuessingGame();
  } else {
    window.stop();
  }
};

// startGuessingGame();
