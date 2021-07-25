import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import AddTodo from './components/AddTodo';
import FilterTodo from './components/Filter';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <FilterTodo />
      <ListTodo />
      
    </div>
  );
}

export default App;
