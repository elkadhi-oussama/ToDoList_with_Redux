import {ADD_TODO, DELETE_TODO, EDIT_TODO, DONE_TODO, FILTER_TODOS} from '../Constants/actions-types'

export const  addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const deleteTodo = id => {
    return {
        type : DELETE_TODO, 
        payload: id
    }
}

export const editTodo = todo => {
    return {
        type : EDIT_TODO, 
        payload: todo
    }
}

export const doneTodo = id => {
    return {
        type : DONE_TODO, 
        payload: id
    }
}

export const filterTodos=(data)=>{
    return {
        type:FILTER_TODOS,
        payload:data
    }
}