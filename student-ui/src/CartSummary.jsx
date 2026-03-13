import React from 'react';

const CartSummary = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p data-testid="cart-count">Items: {cartItems.length}</p>
      <p data-testid="total-price">Total: ${total}</p>
      {cartItems.length > 0 && <button>Checkout</button>}
    </div>
  );
};

export default CartSummary;