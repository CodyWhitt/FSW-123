import TodoList from './TodoList.js'; //import TodoList comp
import {todos} from "./STORE.js"; // import array data
import {useState} from "react"; //use state middleware
import NewItem from './AddTodo'; // import new item comp

// app main brain
export default function App() {
  const [todosItems, setTodos] = useState(todos);
  
  const completed = id => { 
    const tempItems = [...todosItems];
    const index = tempItems.findIndex(item => item.id === id);
    tempItems[index].completed = !tempItems[index].completed
    setTodos(tempItems)
  } // strikes line through item after checking
  
  const deleteItem = (id) => {
    const tempItems = [...todosItems];
    const newItems = tempItems.filter((item) => item.id !== id)
    setTodos(newItems)
  } // deletes item when x is clicked

  const create = newTodo => {
    const newList = [...todosItems];
    console.log(newTodo);
    newList.push(newTodo)
    setTodos(newList);
  }; //add new item to array

  return (
    <div>
      <h3>ToDo-List</h3>
      <NewItem createTodo={create}/>
      <TodoList item = {todosItems} completed = {completed} deleteItem = {deleteItem}/>
    </div>
  ); // what you see on the page
}

