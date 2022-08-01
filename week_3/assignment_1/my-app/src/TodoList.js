import Todo from './Todo';

export default function TodoList({items, completed, deleteItem}) {
  
  const todosList = items.map((item) => {  
    return <Todo key = {item.id} item={item} completed={completed} deleteItem={deleteItem} />
  });
  return (
    <>
      <ul>{todosList}</ul>
    </>
    )
}
