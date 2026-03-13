import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useState } from 'react';
import ProductList from './ProductList';
import CartSummary from './CartSummary';

// A "Test Wrapper" to simulate the Parent App state
const TestApp = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Mouse', price: 20 },
    { id: 2, name: 'Monitor', price: 200 }
  ];

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div>
      <ProductList products={products} onAddToCart={addToCart} />
      <CartSummary cartItems={cart} />
    </div>
  );
};

describe('Product to Cart Integration', () => {
  test('adding products updates the Cart Summary total and count', () => {
    render(<TestApp />);

    const addButtons = screen.getAllByRole('button', { name: /add to cart/i });

    // 1. Initially cart should be empty
    expect(screen.getByTestId('cart-count')).toHaveTextContent('Items: 0');

    // 2. Click "Add to Cart" for the Mouse ($20)
    fireEvent.click(addButtons[0]);
    
    // 3. Assert UI updates
    expect(screen.getByTestId('cart-count')).toHaveTextContent('Items: 1');
    expect(screen.getByTestId('total-price')).toHaveTextContent('Total: $20');

    // 4. Click "Add to Cart" for the Monitor ($200)
    fireEvent.click(addButtons[1]);

    // 5. Assert final state
    expect(screen.getByTestId('cart-count')).toHaveTextContent('Items: 2');
    expect(screen.getByTestId('total-price')).toHaveTextContent('Total: $220');
  });
});