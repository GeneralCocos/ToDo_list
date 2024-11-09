import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskBoardComponent from "./view/taskboard-component.js";
import TaskListComponent from "./view/task-list-component.js";
import TaskComponent from "./view/task-component.js";
import {render, RenderPosition} from './framework/render.js';




const bodyContainer= document.querySelector('.board-app');
const formContainer= document.querySelector('.board-app__main');
const taskBoard = document.querySelector(".taskboard");

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer, RenderPosition.AFTERBEGIN);
render(new TaskBoardComponent(), taskBoard, RenderPosition.BEFOREEND);

const tasksBoardList = document.querySelector(".taskboard__inner");

for (let i = 0; i < 4; i++) {
  const taskListComponent = new TaskListComponent();
  render(taskListComponent, tasksBoardList, RenderPosition.BEFOREEND);

  let tasksList = taskListComponent.getElement().querySelector(".tasks__list");

  for (let j = 0; j < 4; j++) {
    render(new TaskComponent(), tasksList, RenderPosition.BEFOREEND);
  }
}