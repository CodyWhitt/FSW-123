function TodoList({ todos }) {
    return(
    <ul>
      {
        todos.map((item, index) => <li key = {index} >{item.text}</li>)
      }
    </ul>
    )
  }

export default TodoList