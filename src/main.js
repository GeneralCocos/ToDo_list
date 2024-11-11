import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskBoardComponent from "./view/taskboard-component.js";
import TaskListComponent from "./view/task-list-component.js";
import TaskComponent from "./view/task-component.js";
import EmptyTaskComponent from "./view/empty-task-component.js";
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';
import { StatusArray } from "./const.js";
import { render, RenderPosition } from './framework/render.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const taskBoard = document.querySelector(".taskboard");

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer, RenderPosition.AFTERBEGIN);
render(new TaskBoardComponent(), taskBoard, RenderPosition.BEFOREEND);

const tasksBoardList = document.querySelector(".taskboard__inner");
const tasksModel = new TasksModel();
const tasks = [...tasksModel.tasks];  // Исправленный доступ к задачам

for (let i = 0; i < StatusArray.length; i++) {
  const status = StatusArray[i];
  const taskListComponent = new TaskListComponent(status);
  render(taskListComponent, tasksBoardList, RenderPosition.BEFOREEND);

  const tasksList = taskListComponent.element.querySelector(".tasks__list");

  const tasksForStatus = tasks.filter((task) => task.status === status);

  if (tasksForStatus.length === 0) {
    render(new EmptyTaskComponent(), tasksList, RenderPosition.BEFOREEND);
  } else {
    for (let j = 0; j < tasksForStatus.length; j++) {
      const task = tasksForStatus[j];
      render(new TaskComponent({ task, status }), tasksList, RenderPosition.BEFOREEND);
    }
  }
}

const tasksBoardPresenter = new TasksBoardPresenter({ bodyContainer: taskBoard, tasksModel });
tasksBoardPresenter.init();
