import type React from "react"
import type { UserProfileCardProps } from "../../types"

const DEFAULT_AVATAR = "https://imgs.search.brave.com/JrV-ef8DyMCLDlNVbJ6pdWSeIguq2O-sS3udVHANWFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTQv/NDYyLzU2NC9zbWFs/bC9ibHVlLXNpbGhv/dWV0dGUtZm9yLWdl/bmVyaWMtdXNlci1w/cm9maWxlLWF2YXRh/ci1wbGFjZWhvbGRl/ci1mcmVlLXZlY3Rv/ci5qcGc"

/**
 * UserProfileCard Component
 * -------------------------
 * Renders a user profile card with avatar, name, optional email,
 * optional role, and an "Edit Profile" action button.
 *
 * Props:
 * @param {User} user
 *   The user object containing id, name, email, role, and optional avatarUrl.
 *
 * @param {boolean} [showEmail=false]
 *   When true, displays the user's email inside the card.
 *
 * @param {boolean} [showRole=false]
 *   When true, displays the user's role (Admin, User, Guest).
 *
 * @param {(userId: string) => void} [onEdit]
 *   Callback fired when the "Edit Profile" button is clicked.
 *   The component passes `user.id` to the parent so the parent
 *   can open a modal, load user data, or perform other actions.
 *
 * @param {React.ReactNode} [children]
 *   Optional additional content rendered above the email/role section.
 *   Useful for:
 *   - Adding custom labels
 *   - Adding badges
 *   - Adding extra UI elements per user
 *
 * Component Interaction:
 * ----------------------
 * - This component does NOT manage modal state.
 * - It simply notifies the parent when the user wants to edit their profile.
 *
 * Example Flow:
 * 1. User clicks "Edit Profile".
 * 2. UserProfileCard calls: onEdit(user.id)
 * 3. Parent component (App) receives the ID.
 * 4. App finds the user, stores it in state, and opens the modal.
 *
 * Why children matter:
 * --------------------
 * Children allow the parent to inject custom UI into the card
 * without modifying the component itself. This keeps the component
 * flexible and reusable.
 *
 * Why keys matter (when rendering multiple cards):
 * ------------------------------------------------
 * When UserProfileCard is used inside a `.map()`:
 *   <UserProfileCard key={user.id} ... />
 *
 * Keys help React:
 * - Track each card individually
 * - Prevent incorrect re-renders
 * - Maintain internal component stability
 *
 * Why useState matters (in the parent):
 * -------------------------------------
 * The parent uses `useState` to store:
 * - The selected user
 * - Whether the modal is open
 *
 * When state changes:
 * - React re-renders the parent
 * - The updated props flow down into UserProfileCard and Modal
 *
 * This is the core of React’s one-way data flow.
 */

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
    user,
    showEmail = false,
    showRole = false,
    onEdit,
    children
    }) => {

    return(
        <div className="card bg-base-100 w-96 shadow-sm mx-auto">
            <div className="flex ">
                <div className="flex justify-center items-center avatar ms-10 mt-5">
                    <div className="w-24 rounded-full aura aura-silver ">
                        <img className="w-22 mx-auto rounded-full" src={user.avatarUrl ? user.avatarUrl : DEFAULT_AVATAR} />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    {children}
                    {showEmail && <p>{user.email}</p>}
                    {showRole && <p>{user.role}</p>}
                </div>
            </div>
            <div className="card-actions mx-auto mt-5 mb-5">
                <div className="aura aura-gold">
                    <button className="btn"
                            onClick={() => onEdit?.(user.id)}>
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    )
}