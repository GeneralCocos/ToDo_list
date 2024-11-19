import { AbstractComponent } from "../framework/view/abstract-component.js";

function createTaskComponentTemplate(task) {
    return `<div class="tasks__item card taskboard__item task card__border__${task.status}">${task.title}</div>`;
}

export default class TaskComponent extends AbstractComponent {
    constructor({task}) {
        super();
        this.task = task;
    }

    get template() {
        return createTaskComponentTemplate(this.task);
    }
}
