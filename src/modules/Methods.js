/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */

export default class Methods {
  createelement(taskinfo) {
    const check = 'checked';
    const uncheck = '';
    const listtask = document.getElementById('listtask');
    const complete = taskinfo.completed ? check : uncheck;
    const text = `
      <li  class="itemtask">
        <div class="stylelistitems">
          <input name="${taskinfo.id}" class="checkbox" type="checkbox"  job="complete" aria-label="alfa" ${complete}>
          <p id="edittask">${taskinfo.description}</p>
        </div>
        <div class = "space">
         <img name='deletetask' id="${taskinfo.id}" class="stylelogos" job="delete" src="./imgs/menu.png" alt="">
        </div>
      </li>`;
    listtask.insertAdjacentHTML('afterbegin', text);
    this.resetform();
  }

  resetform =() => {
    const reset = document.getElementById('listtext');
    (reset === null) ? '' : (reset.value = '');
  }
}