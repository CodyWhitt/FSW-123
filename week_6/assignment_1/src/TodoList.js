import Todo from './Todo';

export default function TodoList({item, completeItem, deleteItem, editItem}) {

  // populates data into a viewable list in HTML
  const todosList = item.map((item) => {  
    return <Todo key = {item.id} item={item} completeItem={completeItem} deleteItem={deleteItem} editItem={editItem} />
  });
  return (
    <>
      <ul>{todosList}</ul>
    </>
    );
}
