/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// * game value
// * we can define variables from the same type with comma between them
let min = 1,
	max = 10,
	winningNum = 2,
	guessesLeft = 3;

// * UI elements
const GameEL = document.querySelector("#game"),
	minNumEL = document.querySelector(".min-num"),
	maxNumEL = document.querySelector(".max-num"),
	guessBtn = document.querySelector("#guess-btn"),
	guessInput = document.querySelector("#guess-input"),
	messageEL = document.querySelector(".message");

// * Assign UI min max values
minNumEL.textContent = min;
maxNumEL.textContent = max;

// * listen for guess
guessBtn.addEventListener("click", function (e) {
	console.log("guessBtn clicked... \nValue:", guessInput.value);
	let guess = parseInt(guessInput.value);

	// * input validation
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please Enter Number between ${min} and ${max}`, "red");
	} else {
		// * check if won
		if (guess === winningNum) {
			// * game over - WON
			gameOver(true, `${winningNum} is correct , YOU WIN !`, "green");
		} else {
			// * subtract from the total number of guesses
			guessesLeft--;
			if (guessesLeft === 0) {
				// * Game over - LOST
				gameOver(
					false,
					`Game over - you lost ! the correct number was ${winningNum}`
				);
			} else {
				// * game continues - wrong answer !
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
	guessInput.disabled = true;
	guessInput.style.borderColor = color;
	setMessage(msg, color);
}

function setMessage(msg, color) {
	messageEL.style.color = color;
	messageEL.textContent = msg;
}
