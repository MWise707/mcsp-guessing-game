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

var userScores = {}; // ✅ Feature 7: Guess Star

// document.onload = startGuessingGame();
// startGuessingGame();
setTimeout(startGuessingGame, 500);

// Functions to be used later

function startGuessingGame() {
  var secretNum = Math.trunc(Math.random() * 10); // Secret number generated each game play
  // console.log(secretNum); // Used when debugging and checking functionality
  var userName, guess;
  userName = prompt("What is your name?\n**case sensitive**");
  var guess; // ✅ Feature 1: Guess once.
  var numberOfTries = 1; // ✅ Feature 3: How many tries?
  var guessHistory = []; // ✅  Feature 4: History in the making
  var playAgain; // ✅ Feature 6: Play again
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
  // console.log(userScores); // Used to view high score object when verifying functionality
  playAgain = prompt(
    `${userName} would you like to play again?\n** YES or NO **`
  ).toLowerCase(); // passed original function back in if user chooses to play again
  if (playAgain === "y" || playAgain === "yes") {
    startGuessingGame();
  } else {
    return 0;
  }
}
