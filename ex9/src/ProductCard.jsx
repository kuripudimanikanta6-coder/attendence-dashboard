import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      {product.image && (
        <img
          src={product.image}
          src={image1.png}
          alt={product.name}
          className="product-image"
        />
      )}
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;