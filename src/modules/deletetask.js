export default function deletetask(e){
    if (e.target.name === 'deletetask') {
      const Deleteid = parseInt(e.target.getAttribute('id'));
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      const tasks2 = tasks.filter((task) => task.id !== Deleteid);
      localStorage.setItem('tasks', JSON.stringify(tasks2));
      const element = document.getElementById(`${Deleteid}`);
      element.parentElement.parentElement.remove();
    }
  }