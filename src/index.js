import './styles.scss';
import './imgs/enter.png';
import './imgs/menu.png';
import './imgs/refresh.png';

const LIST = []; let id = 0;

document.getElementById('clearall').addEventListener('click', () => {
  localStorage.clear();
});

const check = 'checked';
const uncheck = '';
const listtask = document.getElementById('listtask');

class Methods {
  createElement = (description, id, completed) => {
    const complete = completed ? check : uncheck;
    listtask.style.border = '1px solid #888';
    const text = `
            <li class="itemtask" id='list'>
              <div class="stylelistitems">
                <input id="tast"  class="checkbox" type="checkbox"  job="complete" aria-label="alfa" ${complete}>
                <p>${description}</p>
              </div>
              <div class = "space">
               <img name='deletetask' id="${id}" class="stylelogos" job="delete" src="./imgs/menu.png" alt="">
              </div>
            </li>`;
    listtask.insertAdjacentHTML('beforeend', text);
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

const ui = new Methods();

const enter = document.getElementById('enter');
enter.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.getElementById('listtext').value;
  if (description) {
    ui.createElement(description, id, false);
    LIST.push({
      name: description,
      id,
      completed: false,
    });
    id += 1;
  }
});

const completetoDo = (element) => {
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
});
