import React from "react";

function Footer({ items = [] }) {
  const numOfItems = items.length;
  const PackedItems = items.filter((item) => item.packed).length;
  const percentage =numOfItems === 0 ? 0 : Math.round((PackedItems  /numOfItems) * 100);
  let message;
  if (percentage === 100) {
    message = "You got everything ~ Ready to go";
  } else {
    message = `You have ${numOfItems} items on your list, and you already packed ${PackedItems } (${percentage}%)`;
  }

  return (
    <footer className="footer">
      <h4>{message}</h4>
    </footer>
  );
}

export default Footer;
