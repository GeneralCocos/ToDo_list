import { AbstractComponent } from "../framework/view/abstract-component.js";

function createEmptyTaskComponentTemplate() {
  return `<div class = "card__empty">
  <p class="tasks__item tasks__item card__empty__text">Нет задач</p>
  </div>`;
}

export default class EmptyTaskComponent extends AbstractComponent {
  get template() {
    return createEmptyTaskComponentTemplate();
  }
}