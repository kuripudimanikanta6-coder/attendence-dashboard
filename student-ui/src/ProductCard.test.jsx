import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

const mockProduct = { id: 1, name: 'Mechanical Keyboard', price: 100 };

describe('ProductCard Unit Tests', () => {

  test('renders product name and price correctly', () => {
    render(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  test('calls onAddToCart when button is clicked', () => {
    const mockHandler = vi.fn();
    render(<ProductCard product={mockProduct} onAddToCart={mockHandler} />);
    
    const button = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(button);
    
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(mockHandler).toHaveBeenCalledWith(mockProduct);
  });

  test('button is visible on the product card', () => {
    render(<ProductCard product={mockProduct} />);
    
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeInTheDocument();
  });

  test('product price displays correctly with dollar symbol', () => {
    render(<ProductCard product={mockProduct} />);
    
    const price = screen.getByText('$100');
    expect(price).toBeVisible();
  });

});