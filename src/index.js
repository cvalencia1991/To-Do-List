import './styles.scss';
import './imgs/enter.png';
import './imgs/menu.png';
import './imgs/refresh.png';
import Task from './modules/constructor.js';
import addtasklocalstorage from './modules/localstorage.js';


document.getElementById('clear').addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});

document.addEventListener('DOMContentLoaded',(tasks)=>{
  if(localStorage.getItem('tasks') == null){
    return;
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(description=>{
      const ui = new Methods();
      ui.createelement(description);
    })
  }
});

listtask.addEventListener('click',(e)=>{
  if(e.target.name='deletetask'){
    const Deleteid = parseInt(e.target.getAttribute('id'));
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const tasks2 = tasks.filter(task =>{ return task.id !== Deleteid} );
    localStorage.setItem('tasks', JSON.stringify(tasks2));
    const element =document.getElementById(`${Deleteid}`)
    console.log(element);
    element.parentElement.parentElement.remove();
  }

});

export class Methods {
  createelement(taskinfo) {
    let id;
    const check = 'checked';
    const uncheck = '';
    const listtask = document.getElementById('listtask');
    const tasks4 = JSON.parse(localStorage.getItem('tasks'));
    if(tasks4 === null){
      id = 0
    }else{
      id= tasks4.pop().id + 1;
    }
    const complete = taskinfo.complete ? check : uncheck;
    listtask.style.border = '1px solid #888';
    const text = `
            <li class="itemtask" id='list'>
              <div class="stylelistitems">
                <input id ="tast"  class="checkbox" type="checkbox"  job="complete" aria-label="alfa" ${complete}>
                <p id="edittask">${taskinfo.description}</p>
              </div>
              <div class = "space">
               <img name='deletetask' id="${id}" class="stylelogos" job="delete" src="./imgs/menu.png" alt="">
              </div>
            </li>`;
    listtask.insertAdjacentHTML('afterbegin', text);
  /*   localStorage.setItem('tasks', JSON.stringify()); */
    this.resetform();
  }
  resetform =() => {
    document.getElementById('form').reset();
  }
}

const enter = document.getElementById('enter');
let counter ;
enter.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.getElementById('listtext').value;
  const tasks5 = JSON.parse(localStorage.getItem('tasks'));
  if(localStorage.getItem('tasks')== null){
    counter =0;
  }else{
   counter= tasks5.pop().id + 1;
  }
  const taskinfo = new Task(description, counter, false);
  const ui = new Methods();
  ui.createelement(taskinfo);
  addtasklocalstorage(taskinfo);
});

/* let edittask = document.getElementById('edittask')

edittask.addEventListener('click',(e)=>{
  alert('something');
})


 const edittask = document.getElementById('edittask');

edittask.addEventListener('click',(e)=>{
        console.log(e.target);
})
 const algo = document.getElementsByName('deletetask');
console.log(algo);  */


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
*/