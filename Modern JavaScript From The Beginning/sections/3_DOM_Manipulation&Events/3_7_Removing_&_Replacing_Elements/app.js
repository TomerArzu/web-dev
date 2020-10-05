// * we will learn how to: get,change, remove attributes

// TODO: Replace:
// * 1. create new element - newElement
// * 2. catch the old element
// * 3. get the old-element's parent
// * 4. use replaceChild function to the replacement

// ? Replace elements
// * we want to replace h5 with an h2 and other text
const newHeading = document.createElement("h2");
newHeading.id = "task-title";
newHeading.appendChild(document.createTextNode("new Task List"));
console.log("newHeading", newHeading);

// * Get the old heading
const oldHeading = document.querySelector("h5#task-title");

// * when we are replace element, we replace only children
// * so when we replace we need to access the element-to-remove's parent
const oldHeading_parent = oldHeading.parentElement;

// ? replace the parent child
// * .replaceChild(NewElement, ElementToRemove)
oldHeading_parent.replaceChild(newHeading, oldHeading);
console.log("oldHeading", oldHeading);

// TODO: Remove:
// * to remove we just have to catch the item/it's child and use .remove() method

// ? remove item from list
const lis = document.querySelectorAll("li");
lis[0].remove();

// ? remove child
// * to remove the child we need instance of the child
const list = document.querySelector("ul");
list.removeChild(lis[2]);

// ! CLASSES & ATTRIBUTES
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

// * we can see all classes that element is implement
console.log("link.classList", link.classList);

// ? Add class to element
link.classList.add("Text-Class");
console.log("adding a Text-Class to link", link);

// ? Remove class to element
// * if the action isn't succeed we don't know
let x = link.classList.remove("Text-Class");
console.log("removing a Text-Class to link", link);

// ? Get Attribute
const attr = link.getAttribute("href");
console.log("attr", attr);

// ? Set Attribute
link.setAttribute("href", "https://google.com");

// ? Check if attribute exist
console.log("is href include in link ?", link.hasAttribute("href"));

// ? add new attribute
link.setAttribute("title", "blahblahblah");
console.log("link with new title attribute", link);

// ? remove attribute
link.removeAttribute("title");

console.log("link after removing title attribute", link);
