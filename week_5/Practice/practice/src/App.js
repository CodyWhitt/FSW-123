import {useState, useEffect} from "react";

function App() {

  const [todo, setTodo] = useState({});
  const [flag, setFlag] = useState(false)

  useEffect(() => {

    const getTodo = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then ((response) => response.json())
      .then((data) => setTodo(data))
      .catch((error) => console.log(error))
    }
  
    console.log("useEffect triggered")
    
  getTodo();

  }, []);

  console.log("component is rendered", todo);

  const forceRender = () => {
    setFlag(true);
  }
  return (
    <>
      <p>title: {todo.title}</p>
      <button onClick = {forceRender}> force re-render</button>
    </>
  )
}

export default App;