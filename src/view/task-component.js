import { createElement } from "../framework/render.js";

function createTaskComponent() {
  return `<div class="card card__border__backlog">Выучить JS</div>`;
}

export default class TaskComponent {
  getTemplate() {
    return createTaskComponent();
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