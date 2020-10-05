const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

// ? Clear input
taskInput.value = "";

// ? submit
// * this is the default event of the form button
// form.addEventListener("submit", submitEvent);
// ? Keydown
// * occur when we are on focus in the input line and press any key, as long as it press the event is fired
// taskInput.addEventListener("keydown", runEvent);
// ? Keyup
// * occur when we are on focus in the input line, press any key and release, the event fires in the release
// taskInput.addEventListener("keyup", runEvent);
// ! Keypress - Deprecated - Use "keydown" Event
// // taskInput.addEventListener("keypress", runEvent);
// ? Focus
// * fires when we click inside of the input
// taskInput.addEventListener("focus", runEvent);
// ? Blur
// * fires when we change from focus to out of the focus - to blur
// taskInput.addEventListener("blur", runEvent);
// ? Cut
// * fires when the user use the cut method (ctrl+x or right-click and select "cut" option)
// taskInput.addEventListener("cut", runEvent);
// ? Paste
// * fires when the user use the paste method (ctrl+v or right-click and select "paste" option)
// taskInput.addEventListener("paste", runEvent);
// ? Input
// * fires for every input that changes (fires also for cut/paste/copy)
// * useful for searches
// taskInput.addEventListener("input", runEvent);
// ? Change
// * works on select (dropdown list), fires when the selection changed
// TODO: for action this event with select list, disable materialize CDN in the HTML
// select.addEventListener("change", runEvent);

function runEvent(e) {
	console.log("runEvent -> e", e);
	console.log(`EVENT TYPE: ${e.type}`);

	console.log(e.target.value);

	// * we do something like data binding to heading,
	// * we change the heading in each event the occur at the input
	heading.innerText = e.target.value;

	// ? Get input value
	// * we use this when the user write something and we want to "take it"
	console.log(taskInput.value);

	// ! NOTICE: we use this only if there is a default event, because if there isn't,
	// ! we can miss the original purpose of the event
	// ! for example, try to use "keydown" event with prevention and you can see that there is not input that written
	// e.preventDefault();
}

function submitEvent(e) {
	console.log("runEvent -> e", e);
	console.log(`EVENT TYPE: ${e.type}`);

	e.preventDefault();
}
