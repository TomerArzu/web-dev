/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

const GameEL = document.querySelector("#game"),
  minNumEL = document.querySelector(".min-num"),
  maxNumEL = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  messageEL = document.querySelector(".message");

// ! Add event delegation !
// * since the class "play-again" of the button "guessBtn" added after page load,
// * we have to add the listener onto a parent and then to search for the target that we want which it "play-again"
// * play again event listener
// TODO: when we apply on the following event listener the 'click' event, of the change to "play-again" we catch the "mouseup" event and it fires the event immediately,
// TODO: so we want to apply it only when mouse down
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

minNumEL.textContent = min;
maxNumEL.textContent = max;

guessBtn.addEventListener("click", function (e) {
  console.log("guessBtn clicked... \nValue:", guessInput.value);
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter Number between ${min} and ${max}`, "red");
  } else {
    if (guess === winningNum) {
      gameOver(true, `${winningNum} is correct , YOU WIN !`, "green");
    } else {
      guessesLeft--;
      if (guessesLeft === 0) {
        gameOver(
          false,
          `Game over - you lost ! the correct number was ${winningNum}`
        );
      } else {
        setMessage(
          `${guess} is not correct - ${guessesLeft} guesses left`,
          "red"
        );

        guessInput.style.borderColor = "red";
        guessInput.value = "";
      }
    }
  }
});

function gameOver(won, msg) {
  let color;
  color = won === true ? "green" : "red";
  guessInput.textContent = " ";
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  // * play again ?
  guessBtn.value = "Play Again";
  // * We append the class to the button "play-again"
  guessBtn.className += "play-again";
}

function getRandomNum(min, max) {
  num = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(num);
  return num;
}

function setMessage(msg, color) {
  messageEL.style.color = color;
  messageEL.textContent = msg;
}
