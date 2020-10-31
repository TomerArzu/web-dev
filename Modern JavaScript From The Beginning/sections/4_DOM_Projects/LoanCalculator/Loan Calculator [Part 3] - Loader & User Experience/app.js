document.querySelector("#loan-form").addEventListener("submit", function (e) {
	// * hide results
	document.querySelector("#results").style.display = "none";

	// * show loader
	document.querySelector("#loading").style.display = "block";
	timeout = 1000;

	// after timeout milliseconds we hide the loading bar
	setTimeout(() => {
		calculateResults();
		document.querySelector("#loading").style.display = "none";
	}, timeout);
	// *

	e.preventDefault();
});

function calculateResults() {
	console.log("calculateResults");
	const UIAmount = document.querySelector("#amount");
	const UIInterest = document.querySelector("#interest");
	const UIYears = document.querySelector("#years");
	const UIMonthlyPayment = document.querySelector("#monthly-payment");
	const UITotalPayment = document.querySelector("#total-payment");
	const UITotalInterest = document.querySelector("#total-interest");

	const principal = parseFloat(UIAmount.value);
	const calculatedInterest = parseFloat(UIInterest.value) / 100 / 12;
	const calculatedPayment = parseFloat(UIYears.value) * 12;

	const x = Math.pow(1 + calculatedInterest, calculatedPayment);
	const monthly = (principal * x * calculatedInterest) / (x - 1);

	if (isFinite(monthly)) {
		UIMonthlyPayment.value = monthly.toFixed(2);
		UITotalPayment.value = (monthly * calculatedPayment).toFixed(2);
		UITotalInterest.value = (monthly * calculatedPayment - principal).toFixed(
			2
		);
		document.querySelector("#results").style.display = "block";
	} else {
		document.querySelector("#results").style.display = "none";
		showError("please check your parameters");
	}
}

function showError(error) {
	const errorDiv = document.createElement("div");

	errorDiv.className = "alert alert-danger";

	errorDiv.appendChild(document.createTextNode(error));

	const card = document.querySelector(".card");
	const heading = document.querySelector(".heading");

	card.insertBefore(errorDiv, heading);

	setTimeout(clearError, 3000);
}

function clearError() {
	document.querySelector(".alert").remove();
}
