let inpTask = document.getElementById('inpTask');
let ul = document.getElementById('list');

function addTask(task) {
  ul.innerHTML += `<li>${task} <button id="delete">Delete</button></li>`
}

function clearInp() {
  inpTask.value = '';
  inpTask.focus();
}

addEventListener('click', function(e) {
  el = e.target;

  if (el.id == 'btnAdd') {
    if(!inpTask.value) return;
    addTask(inpTask.value);
    clearInp();
    saveTasks();
  }

  if (el.id == 'delete') {
    el.parentElement.remove();
    saveTasks();
  }
})

addEventListener('keypress', function(e) {
  if(e.keyCode == 13) {
    if (!inpTask.value) return;
    addTask(inpTask.value);
    clearInp();
    saveTasks();
  }
})

function saveTasks() {
  let lis = ul.querySelectorAll('li');
  let toDoList = [];

  for (let taskLi of lis) {
    let task = taskLi.innerText;
    task = task.replace('Delete', '')
    toDoList.push(task);
  }

  let tasksJson = JSON.stringify(toDoList);
  localStorage.setItem('toDoList', tasksJson);
}

function getToDoList() {
  storageList = localStorage.getItem('toDoList');
  if (storageList) {
    toDoList = JSON.parse(storageList);
  } 

  for (let task of toDoList) {
    addTask(task)
  }
}

getToDoList();