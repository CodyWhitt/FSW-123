import './App.css';
import TodoList from './todoList.js';
import {todos} from "./STORE.js";

function App() {
  return (
    <TodoList todos={todos} />
  );
}

export default App;
