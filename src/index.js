import './styles.scss';
import './imgs/enter.png';
import './imgs/menu.png';
import './imgs/refresh.png';
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

const listask = document.getElementById('listtask');

listask.innerHTML = task.map((task) => `<li  class="itemtask" id='list -${task.index}'>
<div>
    <input type="checkbox" id="cbox1" value="first_checkbox" aria-label="alfa">
    <span>${task.description}</span>
</div>
    <div class = "space">
    <img class="stylelogos" src="./imgs/menu.png" alt="">
</div>
</li>`).join('');
