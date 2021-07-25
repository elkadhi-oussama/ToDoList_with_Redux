import {combineReducers} from 'redux'
import TodoReducer from './TodoReducer'
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
    TodoReducer
})

export default rootReducer