// * add event listener for the submit button
document
	.querySelector("#loan-form")
	.addEventListener("submit", calculateResults);

function calculateResults(e) {
	console.log("calculateResults");
	// * extract UI variables
	// * best practice tip - we want to distinguish between UI variables and others,
	// * its common to do it by putting some identifiers list UI[variableName] (like the following) or EL[variableName] (stands for element) or jQuery-like $[variableName]
	const UIAmount = document.querySelector("#amount");
	const UIInterest = document.querySelector("#interest");
	const UIYears = document.querySelector("#years");
	const UIMonthlyPayment = document.querySelector("#monthly-payment");
	const UITotalPayment = document.querySelector("#total-payment");
	const UITotalInterest = document.querySelector("#total-interest");

	// * The calculations:
	const principal = parseFloat(UIAmount.value);
	const calculatedInterest = parseFloat(UIInterest.value) / 100 / 12;
	const calculatedPayment = parseFloat(UIYears.value) * 12;

	// * compute monthly payment:
	const x = Math.pow(1 + calculatedInterest, calculatedPayment);
	const monthly = (principal * x * calculatedInterest) / (x - 1);

	// * we want to check if monthly is a finite number after this division
	if (isFinite(monthly)) {
		UIMonthlyPayment.value = monthly.toFixed(2);
		UITotalPayment.value = (monthly * calculatedPayment).toFixed(2);
		UITotalInterest.value = (monthly * calculatedPayment - principal).toFixed(
			2
		);
	} else {
		showError("please check your parameters");
	}
	// * since its a submit button we want to prevent the default operation
	e.preventDefault();
}

function showError(error) {
	// * create div
	const errorDiv = document.createElement("div");

	// * add class
	errorDiv.className = "alert alert-danger";

	// * create text node and append to div
	errorDiv.appendChild(document.createTextNode(error));

	// * positioning the new div
	// * fetch the upper card
	const card = document.querySelector(".card");
	const heading = document.querySelector(".heading");

	// * Insert error above heading
	card.insertBefore(errorDiv, heading);

	// * for good user experience we want this message to vanish from the display
	// * so, in js we have set time out function that do something after given time
	// * setTimeout(callback function, [TimeInMS])
	// * from the moment we hits the setTimeOut line its active the callback function in TimeInMS mil' secondes
	// * clear error msg after 3 seconds
	setTimeout(clearError, 3000);
}

function clearError() {
	document.querySelector(".alert").remove();
}
