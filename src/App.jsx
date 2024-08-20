import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import PackingItems from './components/PackingItems';
import Footer from './components/Footer';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items")) || []
    setItems(items)
  }, [])

  function handleAddItems(item) {
    const updatedItems = [...items, item]
    localStorage.setItem("items", JSON.stringify(updatedItems))
    setItems(updatedItems)
  }

  function handleDeleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id)
    localStorage.setItem("items", JSON.stringify(updatedItems))
    setItems(updatedItems)
  }

  function handlePackedItem(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    )
    localStorage.setItem("items", JSON.stringify(updatedItems))
    setItems(updatedItems)
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    if (confirmed) {
      localStorage.setItem("items", JSON.stringify([]))
      setItems([])
    }
  }

  return (
    <div className='container'>
      <Header />
      <InputContainer AddingItems={handleAddItems} />
      <PackingItems
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackedItem={handlePackedItem}
        onClearList={handleClearList}
      />
      <Footer items={items}/>
    </div>
  );
};

export default App;
