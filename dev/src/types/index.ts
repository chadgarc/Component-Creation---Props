
/**
 * Represents the type of alert displayed in the AlertBox component.
 * Determines the visual style and semantic meaning of the alert.
 */
export type AlertType = 'success' | 'error' | 'warning' | 'info';

/**
 * Props for the AlertBox component.
 * Displays a contextual message with optional close functionality.
 *
 * @property {AlertType} type - The alert category (success, error, warning, info).
 * @property {string} message - The main text shown inside the alert.
 * @property {() => void} [onClose] - Optional callback triggered when the alert is closed.
 * @property {React.ReactNode} [children] - Optional additional content rendered inside the alert.
 */
export interface AlertBoxProps {
    type: AlertType;
    message: string;
    onClose?: () => void;
    children?: React.ReactNode;
}

/**
 * Represents a user within the application.
 *
 * @property {string} id - Unique identifier for the user.
 * @property {string} name - Full name of the user.
 * @property {string} email - User's email address.
 * @property {string} role - Role assigned to the user (e.g., admin, user).
 * @property {string} [avatarUrl] - Optional URL for the user's profile image.
 */
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
}

/**
 * Props for the UserProfileCard component.
 * Displays user information with optional fields and edit functionality.
 *
 * @property {User} user - The user object containing profile data.
 * @property {boolean} [showEmail] - Whether the email should be displayed.
 * @property {boolean} [showRole] - Whether the role should be displayed.
 * @property {(userId: string) => void} [onEdit] - Callback triggered when the user is edited.
 * @property {React.ReactNode} [children] - Optional additional content rendered inside the card.
 */
export interface UserProfileCardProps {
    user: User;
    showEmail?: boolean;
    showRole?: boolean;
    onEdit?: (userId: string) => void;
    children?: React.ReactNode;
}

/**
 * Represents a product in the catalog.
 *
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - Name of the product.
 * @property {number} price - Product price.
 * @property {string} description - Detailed description of the product.
 * @property {string} [imageUrl] - Optional URL for the product image.
 * @property {boolean} inStock - Indicates whether the product is currently available.
 */
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
    inStock: boolean;
}

/**
 * Props for the ProductDisplay component.
 * Shows product information with optional description and stock status.
 *
 * @property {Product} product - The product object containing all relevant data.
 * @property {boolean} [showDescription] - Whether the description should be displayed.
 * @property {boolean} [showStockStatus] - Whether the stock status should be shown.
 * @property {(productId: string) => void} [onAddToCart] - Callback triggered when adding the product to the cart.
 * @property {React.ReactNode} [children] - Optional additional content rendered inside the component.
 */
export interface ProductDisplayProps {
    product: Product;
    showDescription?: boolean;
    showStockStatus?: boolean;
    onAddToCart?: (productId: string) => void;
    children?: React.ReactNode;
}

/**
 * Props for a generic modal component.
 *
 * @property {boolean} isOpen - Controls whether the modal is visible.
 * @property {() => void} onClose - Callback triggered when the modal is closed.
 * @property {React.ReactNode} children - Content rendered inside the modal.
 */
export interface ModalProps{
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode
}