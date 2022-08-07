import './App.css';
import TodoList from './TodoList.js';
import {todos} from "./STORE.js";
import {useState} from "react";
import NewItem from './AddTodo';

export default function App() {
  const [todosItems, setTodos] = useState(todos);
  
  const completed = id => {
    const tempItems = [...todosItems];
    const index = tempItems.findIndex(item => item.id === id);
    tempItems[index].completed = !tempItems[index].completed
    setTodos(tempItems)
  }
  
  const deleteItem = (id) => {
    const tempItems = [...todosItems];
    const newItems = tempItems.filter((item) => item.id !== id)
    setTodos(newItems)
  }

  const create = newTodo => {
    const newList = [...todosItems];
    console.log(newTodo);
    newList.push(newTodo)
console.log(newList)
    setTodos(newList);
  };

  return (
    <div>
      <h3>ToDo-List</h3>
      <NewItem createTodo={create}/>
      <TodoList item = {todosItems} completed = {completed} deleteItem = {deleteItem}/>
    </div>
  );
}

