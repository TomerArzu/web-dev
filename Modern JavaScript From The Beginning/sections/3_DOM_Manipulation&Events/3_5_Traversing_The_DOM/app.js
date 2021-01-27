// ? traversing
// * moving upward/downwards in the document element as it structured

const list = document.querySelector("ul.collection");
console.log("list", list);

// * each one of the element is uses as a parent/child of other elements
// * we can access elements through theirs parents/children

// TODO: traversing Downwards
// ? Get child nodes
const childNode = list.childNodes;
// * the childNode is from type of NodeList (it is a collection type itself)
// * its contains text nodes (#text) and the li-s of the ul
// * the text nodes are line breakers that is, there are the closing tag of the li (</li>)
// * if we will put the next li in the same line where the </li> tag is in the HTML document,
// * we will not see the text node
// * (see lines 39-40 in index.html and then look that there isn't text between the first and the second li in the childNode)
console.log("childNode", childNode);

// TODO: Types of nodes
// * we can identify nodes by its type
// * the type help us if we want to iterate in interpret a specific types of nodes
console.log("childNode[0].nodeType", childNode[0].nodeType);
console.log("childNode[1].nodeType", childNode[1].nodeType);

// ! List of common nodes types:
//! 1 - Element
//! 2 - Attribute (deprecated)
//! 3 - Text node
//! 8 - Comment
//! 9 - Document itself
//! 10 - Doctype

// * in most cases we don't want to deal with this text nodes, so we want manipulate only the visible children of elements
// ? Get child ELEMENT nodes
const children = list.children;
// * the return value for this property is HTMLCollection (and not a NodeList)
console.log("children", children);

// ? children of children
const grandson = children[3].children;
console.log("grandson", grandson);

// * we can add an id to elements
grandson[0].id = "test-id";

// * we use first/last keyword to access child node/element like:
const firstNodeChild = list.firstChild;
console.log("firstNodeChild", firstNodeChild);
const lastElementChild = list.lastElementChild;
console.log("lastElementChild", lastElementChild);

// * we can count the parent's child elements
const childElementCount = list.childElementCount;
console.log("childElementCount", childElementCount);

// TODO: traversing Upwards
// TODO: all the action we could do from the parent to the children, we can do in vise-verse - from the child to the parent

const listItem = document.querySelector("li.collection-item:nth-child(3)");
console.log("listItem", listItem);

// ? Get parent
const parentNode = listItem.parentNode;
console.log("parentNode", parentNode);
const parentElement = listItem.parentElement;
console.log("parentElement", parentElement);

// TODO: traversing in the same level
// TODO: Access to sibling - "אח"
// * we can access nodes/element that are in the same level in the DOM structure

// ? Get next sibling
const nextSibling = listItem.nextSibling;
console.log("nextSibling", nextSibling);
const nextElementSibling = listItem.nextElementSibling;
console.log("nextElementSibling", nextElementSibling);

// ? Get previous sibling
const previousSibling = listItem.previousSibling;
console.log("previousSibling", previousSibling);
const previousElementSibling = listItem.previousElementSibling;
console.log("previousElementSibling", previousElementSibling);
