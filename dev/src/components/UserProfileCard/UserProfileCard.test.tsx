import { render, screen, fireEvent } from '@testing-library/react'
import { UserProfileCard } from './UserProfileCard'
import {vi} from 'vitest'

/**
 * UserProfileCard Component Tests
 * --------------------------------
 * These tests validate the core behaviors of the UserProfileCard component:
 *
 * 1. It correctly renders the user's name.
 * 2. It conditionally displays the user's email when `showEmail` is enabled.
 * 3. It conditionally displays the user's role when `showRole` is enabled.
 * 4. It triggers the `onEdit` callback with the correct user ID when
 *    the "Edit Profile" button is clicked.
 *
 * Component Interaction:
 * - The parent component (App) passes the `onEdit` callback.
 * - When the user clicks "Edit Profile", the card calls `onEdit(user.id)`.
 * - App receives that ID, selects the user, and opens the modal.
 *
 * These tests ensure that the UserProfileCard behaves predictably and
 * communicates correctly with its parent component.
 */
// Mock user object used across all tests
const mockUser = {
    id: '1',
    name: 'Chris',
    email: 'chris@email.com',
    role: 'Admin'
};

test('Renders user name ', () => {
    // Render the component with only the required props
    render(<UserProfileCard user={mockUser} />);

    // The user's name should always be visible
    expect(screen.getByText("Chris")).toBeInTheDocument()
})


test("Shows email when is true", () => {
    // Render the component with showEmail enabled
    render(<UserProfileCard user={mockUser} showEmail />);
    
    // Email should now be visible
    expect(screen.getByText("chris@email.com")).toBeInTheDocument();
});

test("Shows role when showRoleis true", () => {
    // Render the component with showRole enabled
    render(<UserProfileCard user={mockUser} showRole />);


    // Role should now be visible
    expect(screen.getByText("Admin")).toBeInTheDocument();
});

test("Calls onEdit when Edit Profile is clicked", () => {
    // Create a mock function to track calls
    const handleEdit = vi.fn();

    // Pass the mock function as the onEdit callback
    render(<UserProfileCard user={mockUser} onEdit={handleEdit} />);

    // Simulate clicking the "Edit Profile" button
    fireEvent.click(screen.getByText("Edit Profile"));
    
    // The callback should be called with the user's ID
    expect(handleEdit).toHaveBeenCalledWith("1");
});