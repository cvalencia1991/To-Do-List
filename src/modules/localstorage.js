import Task from './constructor.js';

export default function addtasklocalstorage(taskinfo) {
  if (localStorage.getItem('tasks') == null) {
    const tasks = [];
    tasks.push(taskinfo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    const Arr = JSON.parse(localStorage.getItem('tasks')) || [];
    const counter = Arr.length;
    const newinfo = new Task(taskinfo.description, counter);
    Arr.push(newinfo);
    localStorage.setItem('tasks', JSON.stringify(Arr));
  }
}
