export default function Item({ item, completed, deleteItem}) {
    return (
        <li key = {item.id}>
            <input
                type="checkbox"
                checked = { item.completed }
                onChange={() => completed(item.id)}
            />
            <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
                {item.name}
            </span>
            <button onClick={() => deleteItem(item.id)}>X</button>
        </li>
    )
}
