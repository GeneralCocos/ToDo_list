import { AbstractComponent } from "../framework/view/abstract-component.js";

function createTaskComponentTemplate(task, status) {
    return `<div class="card taskboard__item task card__border__${status}">${task.title}</div>`;
}

export default class TaskComponent extends AbstractComponent {
    constructor({ task, status }) {
        super();
        this.task = task;
        this.status = status;
    }

    get template() {
        return createTaskComponentTemplate(this.task, this.status);
    }
}
