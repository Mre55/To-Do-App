import './style.css';
import interactive from './interactiveList.js';

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

  setToDoArray(newToDoArray) {
    this.toDoTasksArray = newToDoArray;
    this.setListToLocal(this.toDoTasksArray);
  }

  getToDoArray() {
    return this.toDoTasksArray;
  }

  setListToLocal() {
    localStorage.setItem('lists', JSON.stringify(this.toDoTasksArray));
  }

  getListFromLocal() {
    const getList = localStorage.getItem('lists');
    if (getList) {
      this.toDoTasksArray = JSON.parse(getList);
    }
    this.displayToDo();
  }

  displayToDo() {
    this.toDoTasksArray.sort((a, b) => a.index - b.index);

    this.container.innerHTML = this.toDoTasksArray.map((todo) => `
        <article id=${todo.index}>
        <p class = "${todo.completed ? 'complete' : ''}"><input ${todo.completed ? 'checked' : ''} type="checkbox"> ${todo.description} <span> &#xFE19;</span></p>
        <hr class="line-break">
        </article>`).join('');
  }
}

const myToDo = new ToDoList(toDoTasksArray, '.list-item');

document.addEventListener('click', (e) => {
  interactive(e);
  const todoId = e.target.parentElement.parentElement.id;
  if (e.target.checked) {
    const upDatedToDo = myToDo.getToDoArray().map((todo) => {
      if (todo.index === parseInt((todoId), 10)) {
        const newTodo = { ...todo };
        newTodo.completed = true;
        return newTodo;
      }
      return todo;
    });
    myToDo.setToDoArray(upDatedToDo);
  } else {
    const upDatedToDo = myToDo.getToDoArray().map((todo) => {
      if (todo.index === parseInt((todoId), 10)) {
        const newTodo = { ...todo };
        newTodo.completed = false;
        return newTodo;
      }
      return todo;
    });
    myToDo.setToDoArray(upDatedToDo);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  myToDo.displayToDo();
  myToDo.getListFromLocal();
});
