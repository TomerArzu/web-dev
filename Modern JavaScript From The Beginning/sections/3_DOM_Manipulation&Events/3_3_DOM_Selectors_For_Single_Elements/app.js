// ? DOM SELECTORS - querySelector
// * document object method that allows us to pull elements from the DOM
// * and manipulate them
// * jQuery is used to do DOM manipulation and selection but vanilla JS (the updated one)
// * is got much easier to work with so we don't have to use jQuery library (more efficient)
// TODO: document.getElementById()
// ! jQuery is useful for quick simple plugin or scripts that we need to use for specific action,
// ! but not for DOM manipulation.

// * we can categorize the selector into to main types
// *    1. single element selector (Two types we will look right now) - one element by id/class and its variable stored one HTML element
// *    2. multiple element selector - will select all of the elements in that class and return HTMLCollection/NodeList
// console.log(document.getElementById('task-title'));

// ? Get things from the element
console.log(
	"getElementById('task-title').id:",
	document.getElementById("task-title").id
);
console.log(
	"getElementById('task-title').className:",
	document.getElementById("task-title").className
);

const taskTitle = document.getElementById("task-title");

// ? Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// ?  Change content
// * we have 3 different ways to change HTML elements content
// * we will apply this properties after selecting the changeable element
// * textContent
// taskTitle.textContent = 'Task List';
// * innerText
// taskTitle.innerText = 'My Tasks';
// * innerHTML - we use this to "push" into the element more HTML element
// * it apply we string between the open and closer HTML tag.
// * here, for example, we selected the h5 element so after rendering we can inspect the HTML page
// * and we can see that we have <h5 id="task-title" (..attr..)><span (..attr..)></span></h5>
// * it is usually used with the use of fetch or AJAX
taskTitle.innerHTML = '<span style="color:red">Task List</span>';
// TODO: NOTICE ! the innerHTML replace the innerHTML that already inside the tag

// ? querySelector
// * a newer and much more powerful selector.
// * with this selector we don't need to select element by id only
// * though, we can select by id either by class.
// * like CSS Selectors:
// *    use: #[id] to select by id
// *    use: .[class] to select by class
// *    or just use: [HTML-ELEMENT] to select by class
// TODO: document.querySelector()
// ! Any of CSS Selectors is working here also

// * we can see that the selector return us all of the HTML line
console.log(document.querySelector("#task-title"));
console.log(
	"document.querySelector('#task-title')",
	document.querySelector("#task-title")
);
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
// * the following line will change only the first line because:
// * li:nth-child(odd) is usually return more then one item (id n > 2)
// * But, querySelector is a single element selector so it will select the first odd in the list
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";
