import React, { useState } from "react";
import Item from "./ItemsList";

function PackingItems({ items, onDeleteItem, onPackedItem, onClearList }) {
  const [sortItems, setSortItems] = useState("input");

  let sortedItems = [...items];

  if (sortItems === "itemname") {
    sortedItems = items.slice().sort((a, b) => a.itemname.localeCompare(b.itemname));
  }

  if (sortItems === "packed") {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onPackedItem={onPackedItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortItems} onChange={(e) => setSortItems(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="itemname">Sort by itemname</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingItems;
