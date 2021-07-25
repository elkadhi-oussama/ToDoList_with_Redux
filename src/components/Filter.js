import React from 'react'
import {useDispatch} from 'react-redux'
import {filterTodos} from '../JS/Actions/Action'

const FilterTodo = () => {

    const dispatch=useDispatch()
    return ( 
        <div className="filter">
        
        <input type="radio" id="all" name="filt" onClick={()=>dispatch(filterTodos("no-filter"))}/>
        <label for="all">All Todos</label>
        <br />
        <input type="radio" id="notDone" name="filt" onClick={()=>dispatch(filterTodos("filter"))} />
        <label for="notDone">Doing</label>
        <br />
       <input type="radio" id="done" name="filt" onClick={()=>dispatch(filterTodos("done"))}/>
       <label for="done">Done</label>
    </div>
     );
}
 
export default FilterTodo;