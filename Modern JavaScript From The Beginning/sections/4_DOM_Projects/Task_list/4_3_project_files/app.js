// * Define UI variable that we will use
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// * load all event listeners
attachEventListener();
function attachEventListener() {
	// ! Event on the document
	// * the following is called when the DOM is loaded
	document.addEventListener("DOMContentLoaded", addTasks);
	// * Add task event
	form.addEventListener("submit", addTask);
	// * remove task event
	taskList.addEventListener("click", removeTask);
	// * clear tasks event
	clearBtn.addEventListener("click", clearTasks);
	// * filter tasks event
	filter.addEventListener("keyup", filterTasks);
}

function addTasks() {
	let tasks;
	if (localStorage.getItem("tasks") != null) {
		tasks = JSON.parse(localStorage.getItem("tasks"));
		tasks.forEach(function (task) {
			// * create the task's UI (li)
			const li = document.createElement("li");
			li.className = "collection-item";
			li.appendChild(document.createTextNode(task));
			const link = document.createElement("a");
			link.href = "#";
			link.className = "delete-item secondary-content";
			link.innerHTML = "<i class='fa fa-remove'></i>";
			li.appendChild(link);

			// * append the li to ul
			taskList.appendChild(li);
		});
	}
}

function storeTaskInLocalStorage(task) {
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}
	tasks.push(task);
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(task) {
	let tasks = JSON.parse(localStorage.getItem("tasks"));
	tasks.forEach(function (item, index) {
		if (item === task) {
			tasks.splice(index, 1);
		}
	});
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(e) {
	if (taskInput.value === "") {
		alert("Add a task");
	} else {
		// * create the task's UI (li)
		const li = document.createElement("li");
		li.className = "collection-item";
		li.appendChild(document.createTextNode(taskInput.value));
		const link = document.createElement("a");
		link.href = "#";
		link.className = "delete-item secondary-content";
		link.innerHTML = "<i class='fa fa-remove'></i>";
		li.appendChild(link);

		// * append the li to ul
		taskList.appendChild(li);

		// * store in LocalStorage
		storeTaskInLocalStorage(taskInput.value);

		// * clear the input
		taskInput.value = "";
	}
	e.preventDefault();
}

function removeTask(e) {
	if (e.target.parentElement.classList.contains("delete-item")) {
		if (confirm("Are You Sure?")) {
			e.target.parentElement.parentElement.remove();
			removeTaskFromLocalStorage(
				e.target.parentElement.parentElement.textContent
			);
		}
	}
}

function clearTasks(e) {
	// ! Nice Trick
	// * we clean the innerHTML of th ul element
	// taskList.innerHTML = "";

	// ! Faster
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
	localStorage.clear();

	// * comparison
	// https://jsperf.com/innerhtml-vs-removechild
}

function filterTasks(e) {
	const text = e.target.value.toLowerCase();
	document.querySelectorAll(".collection-item").forEach(function (task) {
		// * task's first child is text node
		const item = task.firstChild.textContent.toLowerCase();
		if (item.indexOf(text) == -1) {
			task.style.display = "none";
		} else {
			task.style.display = "block";
		}
	});
	console.log("filterTasks -> text", text);
}
