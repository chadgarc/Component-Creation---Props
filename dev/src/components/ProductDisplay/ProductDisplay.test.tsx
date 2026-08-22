
/**
 * ProductDisplay stock status test
 * --------------------------------
 * This test verifies that the ProductDisplay component:
 * - Receives a product with `inStock: true`
 * - Has `showStockStatus` enabled
 * - Correctly renders the "In Stock" label in the UI
 *
 * Connection to the component:
 * - The component uses the `showStockStatus` prop to decide whether
 *   to show stock information.
 * - When `showStockStatus` is true and `product.inStock` is true,
 *   it renders a <p> element with the text "In Stock".
 * - This test ensures that behavior is stable and predictable.
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