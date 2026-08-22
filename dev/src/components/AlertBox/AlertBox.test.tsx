/**
 * AlertBox Component Tests
 * ------------------------
 * These tests verify that the AlertBox component:
 * - Renders the message correctly
 * - Applies the correct style based on the alert type
 * - Calls the onClose callback when the close button is clicked
 * - Renders children when provided
 */
import { render, screen, fireEvent } from "@testing-library/react";
import { AlertBox } from "./AlertBox";
import "@testing-library/jest-dom";
import {vi} from 'vitest'

describe("AlertBox Component", () => {

    test("renders the message", () => {
        render(<AlertBox type="success" message="Operation completed!" />);

        expect(screen.getByText("Operation completed!")).toBeInTheDocument();
    });

    test("applies correct style for success type", () => {
        render(<AlertBox type="success" message="Success!" />);

        const alert = screen.getByText("Success!").parentElement?.parentElement;

        expect(alert).toHaveClass("bg-green-100");
        expect(alert).toHaveClass("border-green-500");
        expect(alert).toHaveClass("text-green-700");
    });

    test("calls onClose when close button is clicked", () => {
        const mockClose = vi.fn();

        render(<AlertBox type="error" message="Error occurred" onClose={mockClose} />);

        const closeButton = screen.getByRole("button");

        fireEvent.click(closeButton);

        expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("renders children content", () => {
        render(
        <AlertBox type="info" message="Info message">
            <p>Extra details here</p>
        </AlertBox>
        );

        expect(screen.getByText("Extra details here")).toBeInTheDocument();
    });
});