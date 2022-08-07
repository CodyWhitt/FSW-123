import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import ReactDOM from "react-dom";

export default function NewItem({ item, createTodo }) {
    const [userInput, setUserInput] = useState([""]);

    const handleChange = event => {
        setUserInput(event.target.value);
    };

        const handleSubmit = event => {
            event.preventDefault();
            const newTodo = { id: uuidv4(), text: userInput, completed: false };
            createTodo(newTodo);
            setUserInput("");
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
        </form>
    );
}