/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import './styles.scss';
import './refresh.png';
import './enter.png';
import './menu.png';

const task = [
  {
    description: 'wash the dishes',
    completed: false,
    index: '1',
  },
  {
    description: 'wash the dishes',
    completed: false,
    index: '2',
  },
  {
    description: 'wash the dishes',
    completed: false,
    index: '3',
  },

];

const listask = () => {
  for (const taska in task) {
    const description = task[taska].description;
    const completed = task[taska].completed;
    const index = task[taska].index;
    const listask = document.getElementById('listtask');
    const addtask = document.createElement('div');
    addtask.innerHTML = `
        <li  class="itemtask" id='list -${index}'>
        <div>
            <input type="checkbox" id="cbox1" value="first_checkbox" aria-label="alfa">
            <span>${description}</span>
        </div>
            <div class = "space">
            <img class="stylelogos" src="./menu.png" alt="">
        </div>
        </li>
        `;
    listask.appendChild(addtask);
  }
};
listask();
