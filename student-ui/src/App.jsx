import React, { useState } from 'react';
import ProductList from './ProductList';
import CartSummary from './CartSummary';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 499 },
    { id: 3, name: 'Headphones', price: 199 },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">My Tech Store</h1>
      <hr className="app-divider" />
      <div className="app-content">
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
};

export default App;