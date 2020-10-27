// ? Local Storage
// * "localStorage" is an object that provide an API methods (set, remove, update)
// * the localStorage object included in the window object
// * its structured in a key-value (it is actually a JSON - JavaScript Object Notation),
// * the value is must be a string BUT we can save arrays, object and more, to do this we will use JSON.Stringify method

// ! Session VS Local storage:
// * Session storage - will clear after we close the browser (Once the session ends)
// * Local storage - will stay until we clear it manually

// * we can see the following in the browser's dev-tools (in firefox under "Storage" tab)
// ? set item in the local storage
// ! NOTICE: there can be duplicate keys
// localStorage.setItem("forename", "John");
// localStorage.setItem("surname", "Snow");
// localStorage.setItem("forename1", "Donald");
// localStorage.setItem("surname1", "Duck");

// ? set item in the session storage
// sessionStorage.setItem("name", "Beth");

// ? Clear local Storage
// localStorage.removeItem("surname");

// ? get from storage
// * to get we specify the key
// const forename = localStorage.getItem("forename");
// console.log("forename from local storage", forename);

// ? clear all local storage
localStorage.clear();

// * after clearing the local storage or if there is not such a key,
// * the getItem method will return null
// const localStorageEmptyItem = localStorage.getItem("forename");
// console.log("localStorageEmptyItem", localStorageEmptyItem);

document.querySelector("form").addEventListener("submit", function (e) {
	// * first, we take the written value from the input
	const task = document.getElementById("task").value;

	// * we can save one task at the time,
	// * if we want to save a several tasks we need to maintain an array of tasks
	let tasks;
	// * the logic:
	// * if there is no tasks array we create a new one else,
	// * we retrieve it from the local storage as a string and convert it to JSON (actually an array),
	// * for more convenient way to work with JS object literals
	if (localStorage.getItem("tasks") == null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}

	// * after we have the array as an array, we push to the end of it the new task from the input
	tasks.push(task);

	console.log("tasks", tasks);

	// * convert the tasks array to string and then, insert into the local storage
	// * the key is "tasks" and value is the tasks array as string
	localStorage.setItem("tasks", JSON.stringify(tasks));

	// alert(`the task '${task}' was saved !`);
	e.preventDefault();
});
