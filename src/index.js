/* eslint-disable radix */
import './styles.scss';
import './imgs/enter.png';
import './imgs/menu.png';
import './imgs/refresh.png';
import Task from './modules/constructor.js';
import addtasklocalstorage from './modules/localstorage.js';
import Methods from './modules/Methods.js';
import deletetask from './modules/deletetask.js';
import clearallsuccess from './modules/clearallsucces.js';

const ui = new Methods();

const clearallcomplete = document.getElementById('clearall');
const listtask = document.getElementById('listtask');
const resetTodo = document.getElementById('clear');
const enter = document.getElementById('enter');
let counter;

resetTodo.addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
});

listtask.addEventListener('click', deletetask);

const reloadcontent = (tasks) => {
  if (localStorage.getItem('tasks') == null) {
    // empty
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((description) => {
      ui.createelement(description);
    });
  }
};

document.addEventListener('DOMContentLoaded', reloadcontent);

enter.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.getElementById('listtext').value;
  if (description === '') {
    return;
  }
  const tasks5 = JSON.parse(localStorage.getItem('tasks'));
  if (localStorage.getItem('tasks') === null || tasks5.length === 0) {
    counter = 0;
  } else {
    counter = tasks5.pop().id + 1;
  }
  const taskinfo = new Task(description, counter, false);
  ui.createelement(taskinfo);
  addtasklocalstorage(taskinfo);
});

const updateIsTaken = (equipment, name) => {
  equipment.forEach((item) => {
    if (item.id === name) {
      item.completed = !item.completed;
    }
  });
};

listtask.addEventListener('click', (e) => {
  const currentData = JSON.parse(localStorage.getItem('tasks'));
  const Deleteid = parseInt(e.target.getAttribute('name'));
  updateIsTaken(currentData, Deleteid);
  localStorage.setItem('tasks', JSON.stringify(currentData));
});

clearallcomplete.addEventListener('click', clearallsuccess);