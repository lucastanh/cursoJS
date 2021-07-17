let inpTask = document.getElementById('inpTask');
let tasks = document.getElementById('list');

function addTask(task) {
  tasks.innerHTML += `<li>${task} <button id="delete">Delete</button></li>`
  saveTasks();  
}

function clearInp() {
  inpTask.value = '';
  inpTask.focus();
}

addEventListener('click', function(e) {
  el = e.target;

  if (el.id == 'btnAdd') {
    if (!inpTask.value) return;
    addTask(inpTask.value);
    clearInp();
  }

  if (el.id == 'delete') {
    el.parentElement.remove();
    saveTasks();
  }
})

addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
    if (!inpTask.value) return;
    addTask(inpTask.value);
    clearInp();
  }
})

function saveTasks() {
  const tasksLi = tasks.querySelectorAll('li');
  const toDoList = [];

  for (let task of tasksLi) {
    let taskText = task.innerText;
    taskText = taskText.replace('Delete', '');
    toDoList.push(taskText);
  }

  const tasksJSON = JSON.stringify(toDoList);
  localStorage.setItem('todoList', tasksJSON)
}

function getTasks() {
  let tasksList = localStorage.getItem('todoList');
  tasksList = JSON.parse(tasksList)

  for (task of tasksList) {
    addTask(task);
  }
}

getTasks();