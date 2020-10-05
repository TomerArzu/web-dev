// * until now we learn how to navigate and change some properties in the DOM
// * BUT we didn't had some interactions with the UI
// * in the following we learn to work with EVENTS and EVENTS LISTENERS

// * we will add events to some element in the DOM

// * first, we will catch the object that we want to add it event
// * then we will use the method addEventListener
// element.addEventListener('EventName', CallBackFunction(){});

// * CallBackFunction can be:
// * anonymous function - without declaration or name
// * named function - function that pre-defined with given name

// * in the HTML we can see that there is href the the button we want to add it event,
// * the href is redirect the page to google home page, that is ok because this is the default behavior of <a> element with specify href
// * in order to change this behavior we want to prevent the default action that it do.
// * to do this, we pass to the callback function e argument (event arg), that use it to prevent the default behavior

// ! example with anonymous function
// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
// 	console.log("Event Poped");
// 	e.preventDefault();
// });

// ! example with named function
document.querySelector(".clear-tasks").addEventListener("click", OnClick);

function OnClick(e) {
	// console.log("Event Poped");

	// TODO: exploring the event object (e)
	console.log("Event Object e Exploring", e);
	// * in the event there are much information
	// * in this information we have the target which point us to the location of there event came from
	// ? Event target
	// * in this case it came from <a> tag with classes: clear-tasks, btn, black
	console.log("OnClick -> e.target", e.target);
	console.log("OnClick -> e.target.classList", e.target.classList);
	e.target.innerText = "Hello";
	// ? Event type
	console.log("e.type", e.type);

	// ? Coordinates relative to the window
	console.log("OnClick -> .clientX", e.clientX);
	console.log("OnClick -> e.clientY", e.clientY);

	// ? Coordinates relative to the Element
	console.log("OnClick -> e.offsetX", e.offsetY);
	console.log("OnClick -> e.offsetY", e.offsetX);
}
