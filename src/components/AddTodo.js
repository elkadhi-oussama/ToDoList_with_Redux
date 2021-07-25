import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../JS/Actions/Action";

const Add = () => {

    const [task, setTask] = useState('')

    const dispatch = useDispatch()

    const clean = () => {
        setTask('')
    }

    return (

        <div class="row">
            <div class="col-md-12">
                <div class="main-todo-input-wrap">
                    <div class="main-todo-input fl-wrap">
                        <div class="main-todo-input-item">
                            <input value={task} onChange={(e) => setTask(e.target.value)} type="text" id="todo-list-item" placeholder="What will you do today?" />
                        </div>
                        <button class="add-items main-search-button"
                            onClick={() => {
                                dispatch(addTodo(task));
                                clean()
                            }}
                        >Add Task</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Add;