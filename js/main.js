//^Selection

var input = document.querySelector(".input");   

var addTaskBtn = document.querySelector(".addBtn");  

var tasksBox = document.querySelector(".inputTasks");   

var taskList = document.querySelector(".taskLi"); 

var clearBttn = document.querySelector(".clearBtn"); 

var filter = document.querySelector(".filter");


//*EventListener

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
clearBttn.addEventListener("click", deleteAll);
filter.addEventListener("keyup", filterTasks)


//Add Task
function addTask() {
        if (input.value == "" || input.value == " ") {
                // alert("Enter any Task!!");
                addTaskBtn.classList.add("modal-trigger");
        }

        else {
                addTaskBtn.classList.remove("modal-trigger");
                //Create todo div
                var taskDiv = document.createElement("div");
                taskDiv.classList.add("task");
                //Create list
                var newTodo = document.createElement("li");
                newTodo.innerText = input.value;

                newTodo.classList.add("taskItem");
                taskDiv.appendChild(newTodo);
                input.value = "";

                taskList.appendChild(taskDiv);
                // tasksBox.appendChild(taskDiv);

                saveLocalTask(input.value);
                // addLocalTask() 

                //*create trash button
                var deletedBtn = document.createElement("button");
                deletedBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
                deletedBtn.classList.add("deletBtn");
                taskDiv.appendChild(deletedBtn);

        }
        // console.log("clicked");
}

//delete task

function deleteTask() {
        var item = document.querySelector(".task");
        if (confirm('Are you sure ?')) {
                removeLocalTask(item);
                item.remove();
        }

}


//delete all tasks
function deleteAll() {
        var allItems = document.querySelectorAll(".task");
        allItems.forEach(item => {
                removeLocalTask(item)
                item.remove();
        })

        console.log("clicked");
}

 //array
//save Local tasks
function saveLocalTask(task) {
        var Tasks;
        if (localStorage.getItem("Tasks") === null) {
                Tasks = [];

        }
        else {
                Tasks = JSON.parse(localStorage.getItem("Tasks"));

        }
        Tasks.push(task);
        localStorage.setItem("Tasks", JSON.stringify(Tasks));
}


function removeLocalTask(task) {
        var Tasks;
        if (localStorage.getItem("Tasks") === null) {
                Tasks = [];

        }
        else {
                Tasks = JSON.parse(localStorage.getItem("Tasks"));

        }
        Tasks.forEach((t, index) => {
                console.log(task.textContent);
                console.log(t);
                if (task.textContent === t) {
                        Tasks.splice(index, 1);
                }
                });

}


function filterTasks(task)
{
        var input = task.target.value.toLowerCase();
        document.querySelectorAll('.task').forEach(item => {
                var liList = item.innerText.toLowerCase();
                if (liList.indexOf(input) != -1) {
                        item.style.display = 'inline-block';
                }
                else {
                        item.style.display = 'none';
                }
        });

}






document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, 0.5);
});


