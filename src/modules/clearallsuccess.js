/* eslint-disable no-unused-expressions */
export default function clearallsuccess() {
  const tasks7 = JSON.parse(localStorage.getItem('tasks'));
  const tasks8 = tasks7.filter((task) => task.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(tasks8));
  const checkbox = document.querySelector('input[job="complete"]:checked');
  let a;
  if (checkbox === null) {
    a = null;
  } else {
    a = checkbox.value;
  }
  const b = 0;
  (a === 'on') ? checkbox.parentElement.parentElement.remove() : b;
}
