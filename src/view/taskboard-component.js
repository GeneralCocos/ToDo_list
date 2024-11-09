import { createElement } from "../framework/render.js";

function createTaskBoardComponent() {
  return `<ul class="taskboard__inner section section__second">
          </ul>`;
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