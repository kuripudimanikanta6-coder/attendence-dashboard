import React from "react";

function CartSummary({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart Summary</h2>
      <p>Items: {cart.length}</p>
      <p>Total: ₹{total}</p>
    </div>
  );
}

export default CartSummary;