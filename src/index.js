/* eslint-disable radix */
import './styles.scss';
import './imgs/enter.png';
import './imgs/menu.png';
import './imgs/refresh.png';
import Task from './modules/constructor.js';
import addtasklocalstorage from './modules/localstorage.js';
import Methods from './modules/Methods.js';

const ui = new Methods();

const clearallcomplete = document.getElementById('clearall');
const listtask = document.getElementById('listtask');
const enter = document.getElementById('enter');
let counter;

document.getElementById('clear').addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
});

listtask.addEventListener('click', (e) => {
  if (e.target.name === 'deletetask') {
    const Deleteid = parseInt(e.target.getAttribute('id'));
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const tasks2 = tasks.filter((task) => task.id !== Deleteid);
    localStorage.setItem('tasks', JSON.stringify(tasks2));
    const element = document.getElementById(`${Deleteid}`);
    element.parentElement.parentElement.remove();
  }
});

document.addEventListener('DOMContentLoaded', (tasks) => {
  if (localStorage.getItem('tasks') == null) {
    // empty
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((description) => {
      ui.createelement(description);
    });
  }
});

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

clearallcomplete.addEventListener('click', () => {
  const tasks7 = JSON.parse(localStorage.getItem('tasks'));
  const tasks8 = tasks7.filter((task) => task.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(tasks8));
  const checkbox = document.querySelector('input[job="complete"]:checked');
  checkbox.parentElement.parentElement.remove();
  window.location.reload();
});