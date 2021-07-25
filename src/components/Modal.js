import { useState } from "react";
import { useDispatch } from "react-redux";
import {editTodo} from '../JS/Actions/Action'


const EditModal = ({todo}) => {

    const [task, setTask] = useState(todo.task)
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault();
      const newTask={id:todo.id,task:task}
      dispatch(editTodo(newTask))
      }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
            <input type="task" value={task} onChange={(e)=>setTask(e.target.value)} />
            <button className='btn btn-info' type="submit">confirm</button>
           
          </form>
        </>
     );
}
 
export default EditModal;