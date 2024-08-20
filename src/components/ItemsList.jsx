function Item({ item, onDeleteItem, onPackedItem }) {
  return (
    <li>
      <input type="checkbox"  checked={item.packed} onChange={() => onPackedItem(item.id)}/>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.number}-{item.itemname}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
export default Item
