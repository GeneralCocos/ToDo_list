import TasksListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/taskboard-component.js';
import { StatusArray } from "../const.js";
import {render} from '../framework/render.js';


export default class TasksBoardPresenter {
  #tasksBoardComponent = new TaskBoardComponent();

  #boardContainer = null;
  #tasksModel = null;
  #boardTasks = [];

  constructor({boardContainer, tasksModel}) {
   this.#boardContainer = boardContainer;
   this.#tasksModel = tasksModel;
  }

  init() {
   this.#renderBoard();
   this.#renderTask();
  }

  #renderBoard() {
    this.#boardTasks = [...this.#tasksModel.getTasks()];

   render(this.#tasksBoardComponent, this.#boardContainer);
   for (const status of StatusArray) {
    const tasksListComponent = new TasksListComponent(status);
    render(tasksListComponent, this.#tasksBoardComponent.getElement());

    const tasksForStatus = this.#boardTasks.filter(
      (task) => task.status === status
    );

    const tasksListElement = tasksListComponent
      .getElement()
      .querySelector(".tasks__list");

    for (const task of tasksForStatus) {
      const taskComponent = new TaskComponent({ task });
      render(taskComponent, tasksListElement);
    }
   }
 
  }
  #renderTask(task, container) {
   const taskComponent = new TaskComponent({ task });

   render(taskComponent, container);
  }
}
