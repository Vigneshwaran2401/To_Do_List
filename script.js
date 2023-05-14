// Get references to the input and button elements
var taskInput = document.getElementById("taskInput");
var deadlineInput = document.getElementById("deadlineInput");
var priorityInput = document.getElementById("priorityInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");
var currentDateTime = document.getElementById("currentDateTime");

// Function to format the date and time
function formatDate(date) {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

// Function to generate random background color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener("click", function() {
  var taskText = taskInput.value.trim();
  var deadlineText = deadlineInput.value;
  var priorityValue = priorityInput.value;
  
  if (taskText !== "") {
    var existingTasks = Array.from(taskList.getElementsByClassName("task-details")).map(function(task) {
      return task.innerText.toLowerCase();
    });

    var taskDateTime = new Date(deadlineText);
    var currentDateTimeObj = new Date();
    
    if (existingTasks.includes(taskText.toLowerCase())) {
      alert("Task already exists!");
      return;
    }

    if (taskDateTime < currentDateTimeObj) {
      alert("Please enter a future deadline!");
      return;
    }

    var li = document.createElement("li");
    li.className = "list-group-item";
    
    var taskDetails = document.createElement("span");
    taskDetails.className = "task-details";
    taskDetails.innerText = taskText + " (Deadline: " + formatDate(taskDateTime) + ")";
    li.appendChild(taskDetails);
    
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function() {
      li.parentNode.removeChild(li);
    });
    li.appendChild(deleteBtn);

    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-secondary btn-sm mr-2 float-right";
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", function() {
      var newTaskText = prompt("Enter new task text", taskText);
      if (newTaskText !== null && newTaskText.trim() !== "") {
        taskDetails.innerText = newTaskText + " (Deadline: " + formatDate(taskDateTime) + ")";
      }
    });
    li.appendChild(editBtn);

    var completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.className = "mr-2";
    completeCheckbox.addEventListener("change", function() {
      if (this.checked) {
        taskDetails.classList.add("task-completed");
      } else {
        taskDetails.classList.remove("task-completed");
      }
    });
    li.appendChild(completeCheckbox);

    li.classList.add(priorityValue + "-priority");

    taskList.appendChild(li);
    taskInput.value = "";
    deadlineInput.value = "";
  }
});

// Update the current date and time every second
setInterval(function() {
  var currentDate = new Date();
  currentDateTime.innerText = formatDate(currentDate);
}, 100);

// Change background color every minute
setInterval(function() {
  document.body.style.background = getRandomColor();
}, 6000);
// Add event listener to the "Add Task" button
addTaskBtn.addEventListener("click", function() {
  var taskText = taskInput.value.trim();
  var deadlineText = deadlineInput.value;
  var priorityValue = priorityInput.value;

  if (taskText !== "") {
    var existingTasks = Array.from(taskList.getElementsByClassName("task-details")).map(function(task) {
      return task.innerText.toLowerCase();
    });

    var taskDateTime = new Date(deadlineText);
    var currentDateTimeObj = new Date();

    if (existingTasks.includes(taskText.toLowerCase())) {
      alert("Task already exists!");
      return;
    }

    if (taskDateTime < currentDateTimeObj) {
      alert("Please enter a future deadline!");
      return;
    }

    var li = document.createElement("li");
    li.className = "list-group-item";

    var taskDetails = document.createElement("span");
    taskDetails.className = "task-details";
    taskDetails.innerText = taskText + " (Deadline: " + formatDate(taskDateTime) + ")";
    li.appendChild(taskDetails);

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function() {
      li.parentNode.removeChild(li);
    });
    li.appendChild(deleteBtn);

    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-secondary btn-sm mr-2 float-right";
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", function() {
      var newTaskText = prompt("Enter new task text", taskText);
      if (newTaskText !== null && newTaskText.trim() !== "") {
        taskDetails.innerText = newTaskText + " (Deadline: " + formatDate(taskDateTime) + ")";
      }
    });
    li.appendChild(editBtn);

    var completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.className = "mr-2";
    completeCheckbox.addEventListener("change", function() {
      if (this.checked) {
        taskDetails.classList.add("task-completed");
      } else {
        taskDetails.classList.remove("task-completed");
      }
    });
    li.appendChild(completeCheckbox);

    li.classList.add(priorityValue + "-priority");

    taskList.appendChild(li);
    taskInput.value = "";
    deadlineInput.value = "";
  }
});

