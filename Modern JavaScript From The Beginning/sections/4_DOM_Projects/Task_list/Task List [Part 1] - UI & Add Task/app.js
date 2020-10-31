// * Define UI variable that we will use
const form = document.querySelector("#task-form");
const collection = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// * load all event listeners
attachEventListener();
function attachEventListener() {
	form.addEventListener("submit", addTask);
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
		collection.appendChild(li);

		// * clear the input
		taskInput.value = "";
	}
	e.preventDefault();
}
