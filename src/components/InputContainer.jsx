import React, { useState } from "react";

const InputContainer = ({ AddingItems }) => {
  const [itemname, setItemname] = useState("");
  const [number, setNumber] = useState(1);

  // console.log(number);
  // console.log(itemname);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!itemname) return;

    const newItem = {
      itemname,
      number,
      packed: false,
      id: Date.now(),
    };

    // console.log(newItem);

    AddingItems(newItem);
    setItemname("");
    setNumber(1);
  };

  const options = [];
  for (let i = 1; i <= 20; i++) {
    options.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  return (
    <form className="input" onSubmit={handleFormSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        name="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      >
        {options}
        
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemname}
        onChange={(e) => setItemname(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default InputContainer;
