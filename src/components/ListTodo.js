
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, doneTodo } from '../JS/Actions/Action';
import EditModal from '../components/Modal'

const ListTodo = () => {
    const todos = useSelector(state => state.TodoReducer.todos)
    const dispatch = useDispatch()
    const filter = useSelector(state => state.TodoReducer.filtertodos)
    const res = filter === 'filter' ?
    todos.filter(todo => todo.isDone === false): filter === 'done' ?
    todos.filter(todo => todo.isDone === true) : todos
    return (
        <div class="main-todo-input fl-wrap todo-listing">
            <h1>My Todo List</h1>
            {
                res.map((e, i) => <div key={i}>
                    <ul id="list-items">
                        <li> 
                            <h1 style={e.isDone ? { textDecoration: "line-through" } : null}>{e.task}</h1>
                            <EditModal todo={e} />
                            <div class="widget-content-right">
                                <button onClick={() => dispatch(doneTodo(e.id))} class="border-0 btn-transition btn btn-outline-success"> <i class="fa fa-check"></i></button>
                                <button onClick={() => dispatch(deleteTodo(e.id))} class="border-0 btn-transition btn btn-outline-danger"> <i class="fa fa-trash"></i> </button>
                            </div>
                        </li>
                    </ul>
                </div>
                )
            }
        </div>
    );
}

export default ListTodo;