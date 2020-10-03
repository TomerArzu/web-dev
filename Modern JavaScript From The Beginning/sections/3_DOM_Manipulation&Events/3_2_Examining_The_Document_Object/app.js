let val;

// * the document is an interface for the HTML
// * the document defines HTML element as object, HTML elements properties,methods, event
// * The HTML DOM is a standard for how to get, change, add, or delete HTML elements
val = document;
console.log("document", val);

// ? following are some of the document interface properties:
// * all return us the all elements in the HTML as a collection
// ! the all is Deprecated we use getElementById() instead
val = document.all;
console.log("document.all", val);
// * we can select or access element in the HTML with all and index as follow:
val = document.all[2];
val = document.all.length;
// * we can access to any parts of the document by its properties
// * if we will access the head it will return us the HTML code itself (also for body as so...)
val = document.head;
console.log("document.head", document.head);
val = document.body;
val = document.doctype;
console.log("document.doctype", document.doctype);
val = document.domain;
val = document.URL;
val = document.characterSet;
console.log("document.characterSet", document.characterSet);
val = document.contentType;
console.log("document.contentType", document.contentType);

// * the following is demonstrate us that we can selects elements without using selectors (but is not recommended)
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
// * we can access the attributes of some elements by access into the element itself
// * and we also need to describe the element name.
val = document.scripts[2].getAttribute("src");

// * we can iterate over HTML elements collection
// * by selecting the elements and turn them into array (because its not arrays by default)
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function (script) {
	console.log("script", script.getAttribute("src"));
});
