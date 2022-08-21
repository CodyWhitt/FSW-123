import TodoList from './TodoList.js'; //import TodoList comp
import {todos} from "./STORE.js"; // import array data
import {useState, createContext, useContext} from "react"; //use state middleware
import NewItem from './AddTodo'; // import new item comp

// app main brain
export default function App() {
  const [todosItems, setTodos] = useState(todos);
  
  const completeItem = id => { 
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

  const editItem = (adjText, id) => {
    const tempItems = [...todosItems];
    const index = tempItems.findIndex(item => item.id === id);
    tempItems[index].text = adjText
    setTodos(tempItems)
    console.log(adjText)
  }; //edits item by index with passed in value from todo component

  return (
    <div>
      <h3>ToDo-List</h3>
      <NewItem createTodo = {create}/>
      <TodoList item = {todosItems} completeItem = {completeItem} deleteItem = {deleteItem} editItem = {editItem}/>
    </div>
  ); // what you see on the page
}

