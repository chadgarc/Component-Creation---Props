import { render, screen, fireEvent } from '@testing-library/react'
import { UserProfileCard } from './UserProfileCard'
import {vi} from 'vitest'

const mockUser = {
    id: '1',
    name: 'Chris',
    email: 'chris@email.com',
    role: 'Admin'
};

test('Renders user name ', () => {
    render(<UserProfileCard user={mockUser} />);
    expect(screen.getByText("Chris")).toBeInTheDocument()
})


test("Shows email when is true", () => {
    render(<UserProfileCard user={mockUser} showEmail />);
    expect(screen.getByText("chris@email.com")).toBeInTheDocument();
});

test("Shows role when showRoleis true", () => {
    render(<UserProfileCard user={mockUser} showRole />);
    expect(screen.getByText("Admin")).toBeInTheDocument();
});

test("Calls onEdit when Edit Profile is clicked", () => {
    const handleEdit = vi.fn();
    render(<UserProfileCard user={mockUser} onEdit={handleEdit} />);
    fireEvent.click(screen.getByText("Edit Profile"));
    expect(handleEdit).toHaveBeenCalledWith("1");
});