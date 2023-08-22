import { useState } from "react";
import css from './ToDo.module.css'

export default function TodoList() {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    function changeInput(event) {
        setValue(event.target.value);
    }

    function addTodo() {
        const newTodo = {
            text: value
        };
        setTodos([...todos, newTodo]);
        setValue("");
    }

    return (
        <div className={css.container}>
            <h2 className={css.todo__title}>Список дел:</h2>
            <div className={css.todo__input}>
                <input
                    className={css.todo__text}
                    type="text"
                    value={value}
                    onInput={changeInput}
                />
                <button
                    className={css.todo__add}
                    onClick={addTodo}
                >
                    Добавить
                </button>
            </div>

            <ul className={css.todo__items}>
                {todos.map((todo, index) => (
                    <li className={css.todo__item} key={index}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}