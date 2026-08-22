
/**
 * ProductDisplay Component Tests
 * ------------------------------
 * These tests verify that ProductDisplay:
 * - Renders product information
 * - Shows optional description and stock status
 * - Calls onAddToCart with the correct product ID
 */
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductDisplay } from "./ProductDisplay";
import "@testing-library/jest-dom";
import {vi} from 'vitest'

describe("ProductDisplay Component", () => {

    const mockProduct = {
        id: "123",
        name: "Wireless Headphones",
        price: 199.99,
        description: "Noise-cancelling headphones",
        imageUrl: "",
        inStock: true
    };

    test("renders product name and price", () => {
        render(<ProductDisplay product={mockProduct} />);

        expect(screen.getByText("Wireless Headphones")).toBeInTheDocument();
        expect(screen.getByText("199.99")).toBeInTheDocument();
    });

    test("renders description when showDescription is true", () => {
        render(
        <ProductDisplay
            product={mockProduct}
            showDescription={true}
        />
        );

        expect(screen.getByText("Noise-cancelling headphones")).toBeInTheDocument();
    });

    test("renders stock status when showStockStatus is true", () => {
        render(
            <ProductDisplay
            product={mockProduct}
            showStockStatus={true}
            />
        );

        expect(screen.getByText("In Stock")).toBeInTheDocument();
        });


    test("calls onAddToCart with product ID when button is clicked", () => {
        const mockAddToCart = vi.fn();

        render(
        <ProductDisplay
            product={mockProduct}
            onAddToCart={mockAddToCart}
        />
        );

        const button = screen.getByText("Add to cart");

        fireEvent.click(button);

        expect(mockAddToCart).toHaveBeenCalledTimes(1);
        expect(mockAddToCart).toHaveBeenCalledWith("123");
    });
});