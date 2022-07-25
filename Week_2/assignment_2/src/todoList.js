function TodoList({todos}){
    const listItems = todos.map((item,index) => <li> key = index item </li>) 
    return (
        <>[{listItems}]</>
    );
}

export default TodoList