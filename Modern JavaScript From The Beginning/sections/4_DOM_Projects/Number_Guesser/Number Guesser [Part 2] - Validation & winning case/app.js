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
	}

	// * check if won
	if (guess === winningNum) {
		guess.disabled = true;
		// * check the input border to green
		guessInput.style.borderColor = "green";
		// * set message
		setMessage(`${winningNum} is correct , YOU WIN !`, "green");
	} else {
	}
});

function setMessage(msg, color) {
	messageEL.style.color = color;
	messageEL.textContent = msg;
}
