import { createElement } from "../framework/render.js";
import { StatusLabel } from "../const.js";

function createTaskComponentTemplate(task, status) {
    return `<div class="card taskboard__item task card__border__${status}">${task.title}</div>`;
}

export default class TaskComponent {
    constructor({ task, status }) {
        this.task = task;
        this.status = status;
        this.element = null;
    }

    getTemplate() {
        return createTaskComponentTemplate(this.task, this.status);
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
