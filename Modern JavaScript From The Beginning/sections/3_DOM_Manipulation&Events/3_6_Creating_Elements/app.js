// * We can create/insert: elements and elements attribute

// ? create element
const li = document.createElement("li");
console.log("Creating new li", li);

// ? add class
li.className = "collection-item";
console.log("adding class to the new li", li);

// ? add id
li.id = "new-item";
console.log("adding id to the new li", li);

// ? set an attribute
// * element.setAttribute(AttrName, AttrValue);
li.setAttribute("title", "new item");
console.log("setting 'title' attribute to the new li", li);

// ? Append child
// * when we append child we append it between we opening and the closing tags
// * in our example: <li> [ChildrenToAppend] </li>
li.appendChild(document.createTextNode("hello world"));
console.log("create and append text node inside the new li", li);

// * adding a link element to the li
// * we are using const because we are not re-assigning the variables,
// * we are just modifying them
const link = document.createElement("a");
link.className = "delete-item secondary-content";
link.setAttribute("href", "#");
link.innerHTML = "<i class='fa fa-remove'></i>";
li.appendChild(link);

// * append the new li to the existing ul
// * first we need to select the element that we want to append into it
// * the use it's appendChild method and inset the new element into it
document.querySelector("ul.collection").appendChild(li);
