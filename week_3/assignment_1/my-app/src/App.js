import './App.css';
import TodoList from './TodoList.js';
import {todos} from "./STORE.js";
import {useState} from "react";

export default function App() {
  const [todosItems, setTodos] = useState(listOfTodos);
  
  const completed = id => {
    const tempItems = [...todosItems];
    const index = tempItems.findIndex(item => item.id === id);
    tempItems[index].isComplete = !tempItems[index].isComplete
    setTodos(tempItems)
  }
  
  const deleteItem = (id) => {
    const tempItems = [...todosItems];
    const newItems = tempItems.filter((item) => item.id !== id)
    setTodos(tempItems)
  }

  return (
    <div>
      <h3>ToDo-List</h3>
        <TodoList todos = {todos} />
    </div>
  );
}
