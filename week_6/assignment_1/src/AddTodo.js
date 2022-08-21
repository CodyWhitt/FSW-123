import {useState} from "react"; //use state middleware
import {v4 as uuidv4} from "uuid"; //unique ID maker


// create new item function
export default function NewItem({createTodo}) {
    const [userInput, setUserInput] = useState([""]); //sets user input state to empty

    const handleChange = event => {
        setUserInput(event.target.value); //renders after ever keystroke
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newTodo = { id: uuidv4(), text: userInput, completed: false };
        createTodo(newTodo);
        setUserInput(""); // submit event for creating a new item to add to array
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label>New todo: </label>
            <input
                value={userInput}
                onChange={handleChange}
                id="task"
                type="text"
                name="task"                   
                placeholder="New Todo"
            />
            <button>Add Todo</button>
        </form> //the part you see 
    );
}