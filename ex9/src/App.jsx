import React, { useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard";
import CartSummary from "./CartSummary";

// hardcoded product list matching the tests
// include an image path (stored in public folder) for each item
const PRODUCTS = [
  { id: 1, name: "Samsung", price: 50000, image: "/image.png" },
  { id: 2, name: "Apple watch", price: 20000, image: "/image.png" },
];

function App() {
  const [cart, setCart] = useState([]);

  const onAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div>
      <h1>Product Store</h1>
      <div className="Stores">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <CartSummary cart={cart} />
    </div>
  );
}

export default App;