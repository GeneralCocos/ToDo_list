import { AbstractComponent } from "../framework/view/abstract-component.js";
function createFormAddTaskComponentTemplate() {
    return (
        `<form class="new-task">
            <div>
                <h2>Новая Задача</h2>
            </div>
            <div class="new-task__buttons">
                <input type="text" id="input_field" placeholder="Название задачи...">
                <button class="button">+ Добавить</button>
            </div>
        </form>`
    );
}

export default class FormAddTaskComponent extends AbstractComponent {
    get template() {
        return createFormAddTaskComponentTemplate();
    }
}
