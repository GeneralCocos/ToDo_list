import { createElement } from "../framework/render.js";

function createTaskListComponent() {
  return `<li class="cell">
              <h2 class="card card__header task-list__title">Бэклог</h2>
              <div class="tasks__list task-list__title cell">

              </div>
            </li>`;
}

export default class TaskListComponent {
  getTemplate() {
    return createTaskListComponent();
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