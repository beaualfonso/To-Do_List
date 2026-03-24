//change title vars
let welcomeHead = document.getElementById("welcomeHead");
let changeTitleBox = document.getElementById("title-change-box");
let changeTitleHead = document.getElementById("title-change-head");
let titleChangeConfirm = document.getElementById("confirm-title-change");
let titleChangeExit = document.getElementById("exit-title-change");
let titleChangeInput = document.getElementById("title-change-edit");
let id = null;
let title;

function saveTitle(newTitle)
{
    localStorage.setItem('title', newTitle);
}

function loadTitle()
{
    let headTitle = localStorage.getItem('title');
    console.log(headTitle);
    return headTitle;
}

let saved = loadTitle();
if(saved)
{
    welcomeHead.textContent = saved;
}

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
    saveTitle(newTitle);
}

function changeTitleAni(){
    showTitleChange();
    changeTitleBox.style.transform = "scale(0)";
    let scale = 0;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame()
    {
        if (scale >= 0.99)
        {
            clearInterval(id);
        }
        else {
            scale += 0.1;
            changeTitleBox.style.transform = `scale(${scale})`;
        }
    }
}

//adding tasks
let addTaskBox = document.getElementById("tasks-box");
let taskTask = document.getElementById("task-task");
let taskClass = document.getElementById("task-class");
let taskDueDate = document.getElementById("task-due-date");
let taskButton = document.getElementById("add-task-button");

function hideAddTasks(){
    addTaskBox.style.display = 'none';
}

function showAddTasks()
{
    addTaskBox.style.display = 'flex';
    hideTitleChange();
}


function addTaskAni()
{
    showAddTasks();
    addTaskBox.style.transform = "scale(0)";
    let scale = 0;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame()
    {
        if (scale >= 0.99)
        {
            clearInterval(id);
        }
        else {
            scale += 0.1;
            addTaskBox.style.transform = `scale(${scale})`;
        }
    }
}

let task = [];

function saveTask()
{
    localStorage.setItem('taskList', JSON.stringify(task));
}

function loadTasks()
{
    let saved = JSON.parse(localStorage.getItem('taskList'));
    if (saved)
    {
        task = saved;
        task.forEach(t => renderTask(t.task, t.class, t.duedate));
    }
}

loadTasks();

function renderTask(addTask, addClass, addDueDate)
{
    var div = document.createElement("div");
    var h = document.createElement("h4");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var button = document.createElement("button");
    let completeClick = 0;

    h.textContent = addTask;
    p1.textContent = addClass
    p2.textContent = addDueDate;
    button.textContent = " ";

    div.style.backgroundColor = "white";
    div.style.maxWidth = "80%";
    div.style.margin = "10px auto";
    div.style.borderRadius = "20px";
    div.style.border = "3px solid black";
    div.style.fontFamily = "Header Font";
    div.style.position = "relative";
    div.style.padding = "12px 40px 12px 20px";
    div.classList.add("bounce");

    h.style.fontSize = "25px";
    h.style.fontWeight = "bold";
    h.style.marginTop = "5px";
    h.style.marginBottom = "1px";
    h.style.wordBreak = "break-word";

    p1.style.marginTop = "5px";
    p1.style.marginBottom = "5px";
    p1.style.wordBreak = "break-word";

    p2.style.marginTop = "5px";
    p2.style.marginBottom = "5px";
    p2.style.wordBreak = "break-word";

    button.style.padding = "10px";
    button.style.backgroundColor = "white";
    button.style.border = "3px solid black";
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.borderRadius = "10px";
    button.style.position = "absolute";
    button.onclick = function()
    {   
        if(completeClick == 0)
        {
            div.style.backgroundColor = "lightgreen";
            button.style.backgroundColor = "#7DF7A4";
            div.classList.add("wiggle");
            completeClick = 1;
        }
        else if (completeClick == 1)
        {
            task = task.filter(t => t.task !== addTask);
            saveTask();
            div.remove();
            completeClick = 0;
        }
    }
    div.appendChild(h);
    div.appendChild(p1);
    div.appendChild(p2);
    div.append(button);
    document.getElementById("new-tasks").appendChild(div);

    return div;
}

function createDiv()
{
    var addTask = taskTask.value;
    var addClass = taskClass.value;
    var addDueDate = taskDueDate.value;

    task.push({task: addTask, class:addClass, duedate: addDueDate});
    saveTask();

    let div = renderTask(addTask, addClass, addDueDate);

    hideAddTasks();
    taskTask.value = "";
    taskClass.value = "";
    taskDueDate.value="";
    return div;
}


