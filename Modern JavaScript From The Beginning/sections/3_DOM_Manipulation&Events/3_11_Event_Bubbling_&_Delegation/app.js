// ? EVENT BUBBLING
// * the bubbling of the events up through the DOM,
// * when event fires on an element, it is (the event) bubble up through its parents,

// // * child of card-content (a leaf in our case):
// document.querySelector(".card-title").addEventListener("click", function () {
//     console.log("event fired from card-title element, bubbling 0");
//     console.log(".card-title");
// });

// // * parent of card-title and child card:
// document.querySelector(".card-content").addEventListener("click", function () {
//     console.log("event fired from card-content element, bubbling 1");
//     console.log(".card-content");
// });

// // * parent of card-content and child col:
// document.querySelector(".card").addEventListener("click", function () {
//     console.log("event fired from card element, bubbling 2");
//     console.log(".card");
// });

// // * parent of card ( a root in our case):
// document.querySelector(".col").addEventListener("click", function () {
//     console.log("event fired from col element, bubbling 3");
//     console.log(".col");
// });

// ! In the above example:
// * when I'll click on the element who's implement the class card-title,
// * its event will fired and it's callback function will be called
// * the event will bubble up to its parent and will fired the same event in the parent,
// * the parent's callback function will be called as well
// * and so on upwards to the root of the DOM (or up to the no-event implementing parent)

// ? EVENT DELEGATION
// * almost the opposite of bubbling, we put the listener on the parent element,
// * and use the callback function on every child of this element.
// * for instance, we put listener on <ul>, and then we will target the <li>

// TODO: When we need event delegation
// * 1. if all children of element implement the same functionality in a certain way (example below)
// * 2. if we dynamically insert element to the DOM through JS

// * for example:
// * all li elements have the delete button,
// * we will catch the parent and assign it an event
// * in the event we will look of the delete-able element (by class/id)
// * as follow:

const listItemWrapper = document.querySelector("ul.collection");
console.log("listItemWrapper", listItemWrapper);

listItemWrapper.addEventListener("click", deleteItem);

function deleteItem(e) {
    console.log("deleteItem ~ e.target", e.target);
    if (e.target.parentElement.classList.contains("delete-item")) {
        console.log("delete item");
        e.target.parentElement.parentElement.remove();
    }
}
