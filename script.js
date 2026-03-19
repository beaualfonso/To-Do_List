let welcomeHead = document.getElementById("welcomeHead");
let header = document.getElementById("header");

//change title vars
let changeTitleBox = document.getElementById("title-change-box");
let changeTitleHead = document.getElementById("title-change-head");
let titleChangeConfirm = document.getElementById("confirm-title-change");
let titleChangeExit = document.getElementById("exit-title-change");
let titleChangeInput = document.getElementById("title-change-edit");

function showTitleChange()
{
    changeTitleBox.style.display = 'flex';
    hideAddTasks();
}

function hideTitleChange()
{
    changeTitleBox.style.display = 'none';
}

function changeTitle()
{
    var newTitle = titleChangeInput.value;
    welcomeHead.textContent = newTitle;
    titleChangeInput.value = "";
    hideTitleChange();
}

//adding tasks
let addTaskBox = document.getElementById("tasks-box");
let taskTask = document.getElementById("task-task");
let taskClass = document.getElementById("task-class");
let taskDueDate = document.getElementById("task-due-date");

function hideAddTasks(){
    addTaskBox.style.display = 'none';
}

function showAddTasks()
{
    addTaskBox.style.display = 'flex';
    hideTitleChange();
}

function createDiv()
{
    var div = document.createElement("div");
    var h = document.createElement("h4");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var button = document.createElement("button");

    var addTask = taskTask.value;
    var addClass = taskClass.value;
    var addDueDate = taskDueDate.value;

    h.textContent = addTask;
    p1.textContent = addClass
    p2.textContent = addDueDate;
    button.textContent = " ";

    div.style.backgroundColor = "white";
    div.style.maxWidth = "80%";
    div.style.margin = "10px auto";
    div.style.borderRadius = "20px";
    div.style.border = "3px solid black";
    div.style.padding = "6px";
    div.style.paddingLeft = "20px";
    div.style.fontFamily = "Header Font";
    div.style.position = "relative";

    h.style.fontSize = "25px";
    h.style.fontWeight = "bold";
    h.style.marginTop = "5px";
    h.style.marginBottom = "1px";

    p1.style.marginTop = "5px";
    p1.style.marginBottom = "5px";

    p2.style.marginTop = "5px";
    p2.style.marginBottom = "5px";

    button.style.padding = "10px";
    button.style.backgroundColor = "white";
    button.style.border = "3px solid darkgreen";
    button.style.top = 0;
    button.style.right = 0;
    button.style.marginTop = "10px";
    button.style.marginRight = "10px";
    button.style.borderRadius = "10px";
    button.style.position = "absolute";

    div.appendChild(h);
    div.appendChild(p1);
    div.appendChild(p2);
    div.append(button);
    document.getElementById("new-tasks").appendChild(div);

    hideAddTasks();
    taskTask.value = "";
    taskClass.value = "";
    taskDueDate.value="";
}