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
      this.resetform();
    }
    resetform =() => {
      document.getElementById('form').reset();
    }
  }