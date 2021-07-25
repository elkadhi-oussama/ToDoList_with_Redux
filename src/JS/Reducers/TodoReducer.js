import {ADD_TODO, EDIT_TODO, DELETE_TODO, DONE_TODO, FILTER_TODOS } from "../Constants/actions-types";

const initialState = {
    todos : [
        {
            id:1, task: 'T1', isDone: false
        },
        {
            id:2, task: 'T2', isDone: false
        },
        {
            id:3, task: 'T3', isDone: true
        }
    ],
    filtertodos:"no-filter"
}
const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos:[...state.todos, {id: Date.now(), task:action.payload, isDone:false}]};
        case DELETE_TODO:
            return {...state,todos:state.todos.filter(todo=>todo.id!==action.payload)};
        case DONE_TODO :
            return {...state, todos: state.todos.map(todo => todo.id === action.payload ? 
                {...todo, isDone: ! todo.isDone} : todo)} 
        case EDIT_TODO :
            return {...state,todos:state.todos.map(todo=>
                todo.id===action.payload.id ? {...action.payload,isDone:todo.isDone}:todo)};
        case FILTER_TODOS:
            return {...state,filtertodos:action.payload}
        default:
            return state;
    }

}
 
export default TodoReducer;