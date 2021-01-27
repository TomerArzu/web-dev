// ? Multiple Element Selector
// this selectors return type of NodeList or HTMLCollection

// ? Get Elements By Class Name:
// TODO: in global scope
// * the following - we will select all the li items where the li is with class "collection-item"
// * and it will return us object with type of "HTMLCollection"
const elementsByClass = document.getElementsByClassName("collection-item");
console.log("elementsByClass", elementsByClass);

// * each item comes with an index just like in array
console.log("elementsByClass[0]", elementsByClass[0]);
// * we can style each of the HTML elements in the collection
elementsByClass[0].style.color = "red";
// * we can change the content (like we already saw)
elementsByClass[3].textContent = "fourth Item";

// * the above example access to a global scope class name of "collection-item"
// * which mean that each collection-item that we will meet in the scan of the DOM,
// * will be take in consideration.
// TODO: in declared (defined/specific) scope
// * if we want to select "collection-item" only under specific tag, we will use single selector to select the tag and then we will use the get by class function
// * for example: lets select all "collection-item" that are under ul element:
// * in this case its give us the result where the div is not included because it out side of the ul scope
const listItems = document
    .querySelector("ul")
    .getElementsByClassName("collection-item");
console.log("listItems", listItems);

// ? Get Elements by tag name:
// * we can select multiply element by tag name
const elementsByTag = document.getElementsByTagName("li");
console.log("elementsByTag", elementsByTag);
console.log("elementsByTag[0]", elementsByTag[0]);

elementsByTag[1].style.color = "green";
elementsByTag[2].textContent = "third Item";

// * convert HTMLCollection into Array
let lis = Array.from(elementsByTag);
console.log("lis", lis);
lis.reverse();
console.log("lis.reverse()", lis);

// * iteration and access to class name
// * we can set second argument which is an index by auto
lis.forEach(function (li, index) {
    console.log(li.classList);
    li.innerText = `My index is ${lis.length - 1 - index}`;
});

// ? QuerySelectorAll
// * this type of selector return us a type of NodeList
// * NodeList take in account not just elements, also text nodes and we can do with NodeList action that we cant do with array
// * like foreach iteration, length and so...
// * querySelectorAll expects selector like CSS selectors
const items = document.querySelectorAll("ul.collection li.collection-item");
console.log("items", items);

items.forEach(function (item, index) {
    console.log("item", item);
});

const liOdd = document.querySelectorAll("li.collection-item:nth-child(odd)");
const liEven = document.querySelectorAll("li.collection-item:nth-child(even)");

console.log("Odd List:");
liOdd.forEach(function (odd) {
    console.log("Odd Element", odd.innerHTML);
    odd.style.backgroundColor = "#f4f4f4";
});

// console.log("Even List:");
// liEven.forEach(function (even) {
// 	console.log("Even Element", even.innerHTML);
// 	even.style.backgroundColor = "#fff";
// });

// ! the for loop works we an HTMLCollection without converting it
// ! because we have length and access by index
// * we can do the same with regular for loop
for (let i = 0; i < liEven.length; i++) {
    console.log(`liEven[${i}]`, liEven[i]);
    liEven[i].style.backgroundColor = "rgba(255,0,0,0.7)";
    liEven[i].style.color = "rgb(255,255,255)";
}
