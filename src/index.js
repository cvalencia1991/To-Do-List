import './styles.scss';
import './imgs/enter.png';
import './imgs/menu.png';
import './imgs/refresh.png';
import Task from './modules/constructor.js';
import addtasklocalstorage from './modules/localstorage.js';

const check = 'checked';
const uncheck = '';
const listtask = document.getElementById('listtask');

document.getElementById('clearall').addEventListener('click', () => {
  localStorage.clear();
});

document.addEventListener('DOMContentLoaded',(tasks)=>{
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(description=>{
    const ui = new Methods();
    ui.createelement(description);
  })
});

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
    }
  }

}

const enter = document.getElementById('enter');
enter.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.getElementById('listtext').value;
  const id = 0;
  if(description === ''){
    return;
  }
  const taskinfo = new Task(description, id, false);
  const ui = new Methods();
  ui.createelement(taskinfo);
  addtasklocalstorage(taskinfo);

});


/* const algo = document.getElementsByName('deletetask');
console.log(algo); */


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
});

const hst = document.getElementById('listtask');

const highScores = [
  { id: '1', name: 'Maximillian', score: 1000 },
  { id: '2', name: 'The second guy', score: 700 },
  { id: '3', name: 'The newbie!', score: 50 },
];

localStorage.setItem('highscores', JSON.stringify(highScores));

let retrievedScores = JSON.parse(localStorage.getItem('highscores'));

const deleteById = function (self) {
  retrievedScores = retrievedScores.filter((elem) => elem.id !== self.id);

  localStorage.setItem('highscores', JSON.stringify(retrievedScores));
  self.parentNode.parentNode.removeChild(self.parentNode);
};

for (let i = 0; i < retrievedScores.length; i++) {
  hst.innerHTML
      += `${'<li >' + '<a id='}${retrievedScores[i].id} href='#' onclick='deleteById(this)'>x</a>${
      retrievedScores[i].name
    } -- ${
      retrievedScores[i].score
    }</li>`;
}
 */