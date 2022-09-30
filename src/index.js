import './styles.scss';
import './imgs/enter.png';
import './imgs/menu.png';
import './imgs/refresh.png';
import Task from './constructor.js';

document.getElementById('clearall').addEventListener('click', () => {
  localStorage.clear();
});

const check = 'checked';
const uncheck = '';
const listtask = document.getElementById('listtask');

class Methods {
  createelement(taskinfo) {
    const complete = taskinfo.complete ? check : uncheck;
    listtask.style.border = '1px solid #888';
    const text = `
            <li class="itemtask" id='list'>
              <div class="stylelistitems">
                <input id="tast"  class="checkbox" type="checkbox"  job="complete" aria-label="alfa" ${complete}>
                <p>${taskinfo.description}</p>
              </div>
              <div class = "space">
               <img name='deletetask' id="${taskinfo.id}" class="stylelogos" job="delete" src="./imgs/menu.png" alt="">
              </div>
            </li>`;
    listtask.insertAdjacentHTML('afterbegin', text);
    this.resetform();
  }

  resetform =() => {
    document.getElementById('form').reset();
  }

  removelist = (text) => {
    if (text.name === 'deletetask') {
      text.parentEelement.parentEelement.remove();
    }
  }
}

const enter = document.getElementById('enter');

enter.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.getElementById('listtext').value;
  const id = 0;
  const taskinfo = new Task(description, id, false);
  const ui = new Methods();
  ui.createelement(taskinfo);

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
});

/* const completetoDo = (element) => {
  element.classlist.toggle(check);
  element.classlist.toggle(uncheck);
  LIST[element.id].completed = !LIST[element.id].completed;
};

const removetoDo = (element) => {
  element.parentElement.parentElement.remove();
  LIST[element.id].completed = true;
};

listtask.addEventListener('click', (event) => {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob === 'complete') {
    completetoDo(element);
  } else if (elementJob === 'delete') {
    removetoDo(element);
  }
}); */
