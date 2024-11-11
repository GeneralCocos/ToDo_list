import { AbstractComponent } from "../framework/view/abstract-component.js";

function createEmptyTaskComponentTemplate() {
  return `<p class="tasks__item">Нет задач</p>`;
}

export default class EmptyTaskComponent extends AbstractComponent {
  get template() {
    return createEmptyTaskComponentTemplate();
  }
}