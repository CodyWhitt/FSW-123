import Todo from './Todo';

export default function TodoList({item, completed, deleteItem}) {

  // populates data into a viewable list in HTML
  const todosList = item.map((item) => {  
    return <Todo key = {item.id} item={item} completed={completed} deleteItem={deleteItem} />
  });
  return (
    <>
      <ul>{todosList}</ul>
    </>
    );
}
