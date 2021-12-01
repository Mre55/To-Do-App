import './style.css';

const toDoTasksArray = [
  {
    description: 'Go to Gym',
    completed: false,
    index: 3,
  },
  {
    description: 'Relax and get to sleep',
    completed: false,
    index: 4,
  },
  {
    description: 'Wakeup from sleep and eat breakfast',
    completed: false,
    index: 1,
  },
  {
    description: "Work on today's tasks",
    completed: false,
    index: 2,
  },

];
class ToDoList {
  constructor(toDoTasksArray, container) {
    this.toDoTasksArray = toDoTasksArray;
    this.container = document.querySelector(container);
  }

  displayToDo() {
    this.toDoTasksArray.sort((a, b) => a.index - b.index);

    this.container.innerHTML = this.toDoTasksArray.map((todo) => `
            <article>
            <p><input type="checkbox"> ${todo.description} <span> &#xFE19;</span></p>
            <hr class="line-break">
            </article>`).join('');
  }
}

const myToDo = new ToDoList(toDoTasksArray, '.list-item');

document.addEventListener('DOMContentLoaded', () => {
  myToDo.displayToDo();
});
