import { AbstractComponent } from "../framework/view/abstract-component.js";

function createTaskBoardComponentTemplate() {
  return `
    <div>
      <ul class="taskboard__inner section section__second"></ul>
      <div class="delete">
        <div class="card card__delete">
          <h1>x Очистить</h1>
        </div>
      </div>
    </div>
  `;
}

export default class TaskBoardComponent extends AbstractComponent {
  get template() {
    return createTaskBoardComponentTemplate();
  }
}
