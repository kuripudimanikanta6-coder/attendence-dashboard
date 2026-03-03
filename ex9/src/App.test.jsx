import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import ProductCard from "./ProductCard";

describe("Unit Testing - ProductCard", () => {
  test("renders product name and price", () => {
    const product = { id: 1, name: "Test Product", price: 1000 };
    render(<ProductCard product={product} onAddToCart={() => {}} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("₹1000")).toBeInTheDocument();
  });

  test("calls onAddToCart when button clicked", () => {
    const product = { id: 1, name: "Test Product", price: 1000 };
    const mockFn = jest.fn();

    render(<ProductCard product={product} onAddToCart={mockFn} />);

    fireEvent.click(screen.getByText("Add to Cart"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("Integration Testing - App", () => {
  test("adds product to cart and updates UI", async () => {
    render(<App />);

    const buttons = screen.getAllByText("Add to Cart");

    await userEvent.click(buttons[0]);

    expect(screen.getByText("Items: 1")).toBeInTheDocument();
    expect(screen.getByText("Total: ₹50000")).toBeInTheDocument();
  });

  test("adds multiple products correctly", async () => {
    render(<App />);

    const buttons = screen.getAllByText("Add to Cart");

    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);

    expect(screen.getByText("Items: 2")).toBeInTheDocument();
    expect(screen.getByText("Total: ₹70000")).toBeInTheDocument();
  });
});