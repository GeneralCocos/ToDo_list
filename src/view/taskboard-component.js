import { createElement } from "../framework/render.js";

function createTaskBoardComponent() {
  return `
    <div><div class="taskboard__inner section section__second">
    </div>
    <div class="delete">
      <div class="card card__delete">
        <h1>x Очистить</h1>
      </div>
    </div></div>
  `;
}

export default class TaskBoardComponent {
  getTemplate() {
    return createTaskBoardComponent();
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
