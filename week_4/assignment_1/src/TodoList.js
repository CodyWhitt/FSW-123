import Todo from './Todo';

export default function TodoList({item, completed, deleteItem}) {


  // populates data into a viewable list in HTML
  const todosList = item.map((items) => {  
    return <Todo key = {items.id} item={items} completed={completed} deleteItem={deleteItem} />
  });
  return (
    <>
      <ul>{todosList}</ul>
    </>
    );
}
