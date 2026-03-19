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