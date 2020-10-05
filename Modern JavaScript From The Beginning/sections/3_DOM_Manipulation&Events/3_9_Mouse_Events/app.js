const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// ? Click
// * occur when the mouse left clicked on the clearBtn
// clearBtn.addEventListener("click", runEvent);
// ? Doubleclick
// clearBtn.addEventListener("dblclick", runEvent);
// ? Mousedown
// clearBtn.addEventListener("mousedown", runEvent);
// ? Mouseup
// clearBtn.addEventListener("mouseup", runEvent);
// ? Mouseenter
// * occur when the mouse cursor enter the element or its children element
// card.addEventListener("mouseenter", runEvent);
// ? Mouseleave
// * occur when the mouse cursor leaves the element and its children element
// card.addEventListener("mouseleave", runEvent);
// ? Mouseover
// * occur when the mouse cursor is right over the element
// card.addEventListener('mouseover', runEvent);
// ? Mouseout
// * occur when the mouse cursor outside of the element or on one of the children
// card.addEventListener('mouseout', runEvent);
// ? Mousemove
// * occur as long as the mouse is in the element and moves
// card.addEventListener("mousemove", runEvent);

// Event Handler
function runEvent(e) {
	console.log(`EVENT TYPE: ${e.type}`);

	heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
