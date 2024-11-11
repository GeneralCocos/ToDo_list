import { createElement } from "../framework/render.js";
import { StatusLabel } from "../const.js";

function createTaskListComponent(status) {
  return `<li class="cell">
              <h2 class="card card__header task-list__title card__${status} card__border__${status}">${StatusLabel[status]}</h2>
              <div class="tasks__list task-list__title cell">

              </div>
            </li>`;
}

export default class TaskListComponent {

  constructor(status) {
    this.status = status;
  }

  getTemplate() {
    return createTaskListComponent(this.status);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}