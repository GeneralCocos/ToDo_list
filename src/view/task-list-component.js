import { AbstractComponent } from "../framework/view/abstract-component.js";
import { StatusLabel } from '../const.js';

function createTaskListComponentTemplate(status) {
  return `
    <li class="tasks-area__item cell ">
      <h2 class=" title tasks-area__title card card__header task-list__title card__${status} card__border__${status}">
        ${StatusLabel[status]}
      </h2>
      <div class="tasks__list  tasks__${status} list-reset task-list__title cell"></div>
    </li>
  `;
}

export default class TaskListComponent extends AbstractComponent {
  constructor(status) {
    super();
    this.status = status;
  }

  get template() {
    return createTaskListComponentTemplate(this.status);
  }
}
